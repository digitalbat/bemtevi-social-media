import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"

export default async function SignUpButton() {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return !user ? (
    <Link className="m-2 w-36" href="/signup">Sign Up</Link >
  ) : (
    <></>
  );
}
