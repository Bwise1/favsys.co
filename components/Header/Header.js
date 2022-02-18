import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";

export default function Header() {
    return (
        <div className="bg-favsent/[0.7] ">
            <header className="flex justify-between container font-umbaMedium items-start ">
                <div className="flex items-center space-x-5 mt-4">
                    <Link href="/">
                        <a>
                            <Image className="cursor-pointer" src={Logo} alt="Logo" height={39} width={123} />
                        </a>
                    </Link>
                </div>
                <div className="hidden md:flex space-x-5 mt-4">
                    <Link href="/#projects"><a><h3 className="cursor-pointer hover:text-heroText">About</h3></a></Link>
                    <Link href="/#projects"><a><h3 className="cursor-pointer hover:text-heroText">Projects</h3></a></Link>
                    <Link href="/#contact"><a><h3 className="cursor-pointer hover:text-heroText">Contact</h3></a></Link>
                </div>
                <div className="  md:hidden space-x-5 mt-4">
                    <svg width="30" height="29" viewBox="0 0 41 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0.875H34.8571C37.6186 0.875 39.8571 3.11358 39.8571 5.875V7.14286H12V0.875Z" fill="black" />
                        <path d="M0 12.0178H40.3929V18.9821H0V12.0178Z" fill="black" />
                        <path d="M0 23.8572H40.3929V30.125H5C2.23858 30.125 0 27.8865 0 25.125V23.8572Z" fill="black" />
                    </svg>
                </div>
            </header>
        </div>
    )
}
