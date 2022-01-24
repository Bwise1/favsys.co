
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between p-5 max-w-7xl fixed mx-auto ">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    Favsys
                </Link>
                <div className="flex space-x-5">
                    <h3>About</h3>
                    <h3>Projects</h3>
                    <h3 className="">Contact</h3>
                </div>
            </div>
        </header>
    )
}
