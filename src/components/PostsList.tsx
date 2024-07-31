"use client"

import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { UserContext } from "@/contexts/UserContext";
import { useEffect, useState } from "react";
import PostCard from "@/components/PostCard";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json';


export default function PostsList() {
    TimeAgo.addLocale(en);

    const [posts, setPosts] = useState<null | any[]>(null);
    const [profile, setProfile] = useState(null);
    const supabase = createClient();

    const user = supabase.auth.getUser();

    if (!user) {
        return redirect("/");
    }

    useEffect(() => {
        fetchPosts();
    }, []);



    function fetchPosts() {
        supabase.from('posts')
            .select('id, content, created_at, photos, profiles(id, avatar, name)')
            .is('parent', null)
            .order('created_at', { ascending: false })
            .then(result => {
                if (result.data) {
                    setPosts(result.data);
                }
            })
    }


    // const isSupabaseConnected = user;
    const isSupabaseConnected = true;

    return (
        <div className="animate-in flex-1 flex flex-col gap-20x max-w-4xl px-3">
            <main className="flex-1 flex flex-col gap-6">
                <h1 className="text-4xl font-bold text-center">{isSupabaseConnected ? "logged" : "not logged in"}</h1>
                <h4 className="text-center">Posts</h4>
                <UserContext.Provider value={{ profile }}>
                    {posts && posts.length > 0 && posts.map(post => (
                        <PostCard key={post.id} {...post} />
                    ))}
                </UserContext.Provider>

            </main>
        </div>
    );




}