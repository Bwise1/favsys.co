import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";

export default function Header() {
    return (
        <div className="bg-favsent/[0.7]">
            <header className="flex justify-between container items-start ">
                <div className="flex items-center space-x-5 mt-4">
                    <Link href="/" passHref>
                        <Image src={Logo} alt="Logo" height={39} width={123}/>
                    </Link>
                    
                </div>
                <div className="flex space-x-5 mt-4">
                        <h3>About</h3>
                        <h3>Projects</h3>
                        <h3 className="">Contact</h3>
                    </div>
            </header>
        </div>
    )
}
