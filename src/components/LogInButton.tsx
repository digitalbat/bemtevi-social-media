import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button"
import LoginDialog from "./LoginDialog";
import {
  Dialog,
  DialogTrigger,
} from "./ui/dialog"
import Link from "next/link";

export default async function LogInButton() {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <Button >
          Logout
        </Button>
      </form>
    </div>
  ) : (
    // <Dialog>
    //   <DialogTrigger asChild>
    //     <Button className="outline bg-secondary">Login</Button>
    //   </DialogTrigger>
    //   <LoginDialog />
    // </Dialog>

    <Link href="/signin" className={buttonVariants({ variant: "secondary" })}>Sign In</Link>
  );
}
