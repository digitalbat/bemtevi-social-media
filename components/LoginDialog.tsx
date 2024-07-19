import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "./ui/input";
import { createClient } from "@/utils/supabase/server";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";


export default async function LoginDialog() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();


  const signIn = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/in?message=Could not authenticate user");
    }

    return redirect("/protected");
  };

  return (

    <DialogContent className="sm:max-w-[425px]">
      <form >
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Login to access
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              className="rounded-md px-4 py-2 bg-inherit border w-max"
              name="email"
              placeholder="you@example.com"
              required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              className="rounded-md px-4 py-2 bg-inherit border w-max"
              type="password"
              name="password"
              autoComplete="off"
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-secondary hover:bg-secondary text-black" type="submit" formAction={signIn}>Sign In</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
