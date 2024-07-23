import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LogHeader from "@/components/LogHeader";
import { redirect } from "next/navigation";

export default function Up({
  searchParams,
}: {
  searchParams: { message: string };
}) {

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const supabase = createClient();

    if (confirmPassword !== password) {
      return redirect("/signup?message=Passwords do not match");
    }


    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/signup?message=Could not registered user");
    }

    return redirect("/signup?message=Confirm account creation in your email");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <LogHeader />

      <form >
        <div className="text-center mb-6">
          <Label className="font-bold text-xl">Sign up to register</Label>
        </div>
        <div className="grid gap-4 py-4 mb-4">
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="confirmPassword" className="text-right">
              Confirm Password
            </Label>
            <Input
              className="rounded-md px-4 py-2 bg-inherit border w-max"
              type="password"
              name="confirmPassword"
              autoComplete="off"
              required
            />
          </div>

        </div>
        <div className="flex flex-col gap-3 pt-4">
          <Button className="bg-primary hover:bg-primary text-white" type="submit" formAction={signUp}>Sign Up</Button>
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </div>
        <div className="text-center p-4">
          or <Link href="/signin">Sign In</Link>
        </div>
      </form>
    </div>
  );
}
