import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

export default async function Posts() {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/");
  }


  const isSupabaseConnected = user;

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <TopBar />
      </div>

      <div className="animate-in flex-1 flex flex-col gap-20x max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-center">{isSupabaseConnected ? "logged" : "not logged in"}</h1>
          <h4 className="text-center">Posts</h4>
        </main>
      </div>

      <Footer />
    </div>
  );
}
function canInitSupabaseClient() {
  throw new Error("Function not implemented.");
}

