import Link from "next/link";
import LogInButton from "./LogInButton";
import Logo from "./Logo";
import SignUpButton from "./signUpButton";

export default function TopBar() {
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm gap-4">
                <div className="w-[130px] p-3 text-sm mt-4 lg:mr-52">
                    <Link href='/' >
                        <Logo />
                    </Link>
                    <h1 className="pt-4 pb-2 text-secondary -mt-6 pl-16">beta</h1>
                </div>
                <LogInButton />
                <SignUpButton />
            </div>
        </nav>
    )
}