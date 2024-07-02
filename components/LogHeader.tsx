import Link from "next/link";
import Logo from "./Logo";

export default async function LogHeader() {
    return (
        <div className="flex flex-col text-center items-center">
            <div className="w-[200px] p-3 text-sm">
                <Link href='/' >
                    <Logo />
                </Link>
                <h1 className="pt-4 pb-2 text-secondary text-sm -mt-6 pl-16">beta</h1>
            </div>
        </div>
    );

}