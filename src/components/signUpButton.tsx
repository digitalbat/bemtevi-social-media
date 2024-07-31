import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button"
import LoginDialog from "./LoginDialog";
import {
  Dialog,
  DialogTrigger,
} from "./ui/dialog"
import Link from "next/link";
import test from "node:test";

export default async function SignUpButton() {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    // "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return user ? (
    <div className="flex items-center gap-4">

    </div>
  ) : (
    <Link className="m-2 w-36" href="/signup">Sign Up</Link>
  );
}
