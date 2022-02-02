import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";

export default function Header() {
    return (
        <div className="bg-favsent/[0.7]">
            <header className="flex justify-between container items-start ">
                <div className="flex items-center space-x-5 mt-4">
                    <Link href="/" passHref>
                        <Image src={Logo} alt="Logo" height={39} width={123} />
                    </Link>

                </div>
                <div className="flex space-x-5 mt-4">
                    {/* <h3>About</h3>
                        <h3>Projects</h3>
                        <h3 className="">Contact</h3> */}
                    <svg width="41" height="31" viewBox="0 0 41 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0.875H34.8571C37.6186 0.875 39.8571 3.11358 39.8571 5.875V7.14286H12V0.875Z" fill="black" />
                        <path d="M0 12.0178H40.3929V18.9821H0V12.0178Z" fill="black" />
                        <path d="M0 23.8572H40.3929V30.125H5C2.23858 30.125 0 27.8865 0 25.125V23.8572Z" fill="black" />
                    </svg>
                </div>
            </header>
        </div>
    )
}
