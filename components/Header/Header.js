
import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-favsent/[0.7]">
            <header className="flex justify-between p-5 max-w-7xl mx-auto">
                <div className="flex items-center space-x-5">
                    <Link href="/">
                        Favsys
                    </Link>
                    
                </div>
                <div className="flex space-x-5">
                        <h3>About</h3>
                        <h3>Projects</h3>
                        <h3 className="">Contact</h3>
                    </div>
            </header>
        </div>
    )
}
