import Link from "next/link";
import LogInButton from "./LogInButton";
import Logo from "./Logo";
import SignUpButton from "./signUpButton";

export default function TopBar() {
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm gap-4">
                <div className="w-full p-3 text-sm">
                    <Link href='/' >
                        <Logo />
                    </Link>
                    <h1 className="pt-4 pb-2 text-zinc-400 -mt-9 pl-16">beta</h1>
                </div>
                <LogInButton />
                <SignUpButton />
            </div>
        </nav>
    )
}