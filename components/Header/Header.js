import React, { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { Popover, Transition } from '@headlessui/react';
import Logo from "../../public/logo.svg";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
          setColorchange(true);
        }
        else{
          setColorchange(false);
        }
     };
     if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeNavbarColor);
     }
    return (
        <div>
            <nav className= {"shadow-sm fixed w-full backdrop-filter backdrop-blur-lg bg-opacity-50 z-10 " +(colorChange? "bg-white":"bg-inherit")}>
                <div className="w-full">
                    <div className="flex items-center container m-auto font-umbaMedium h-20 w-full">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center space-x-5 mt-4">
                                <Link href="/" to="home">
                                    <a>
                                        <Image className="cursor-pointer" src={Logo} alt="Logo" height={39} width={123} />
                                    </a>
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        className="cursor-pointer hover:bg-buttonPaint text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        to="home"
                                        activeClass="Home"
                                        href="/"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        activeClass="projects"
                                        to="projects"
                                        href="/#projects"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-buttonPaint text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Projects
                                    </Link>

                                    <Link
                                        activeClass="Services"
                                        to="services"
                                        href="/#services"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-buttonPaint text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Services
                                    </Link>

                                    <Link
                                        activeClass="contact"
                                        to="contact"
                                        href="/#contact"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-buttonPaint text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Contact
                                    </Link>
                                    <Link
                                        activeClass="clients"
                                        to="clients"
                                        href="/#clients"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-buttonPaint text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Clients
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:hidden ">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className=" inline-flex items-center justify-center p-2 rounded-md text-black text-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-buttonPaint focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg width="30" height="29" viewBox="0 0 41 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0.875H34.8571C37.6186 0.875 39.8571 3.11358 39.8571 5.875V7.14286H12V0.875Z" fill="black" />
                                        <path d="M0 12.0178H40.3929V18.9821H0V12.0178Z" fill="black" />
                                        <path d="M0 23.8572H40.3929V30.125H5C2.23858 30.125 0 27.8865 0 25.125V23.8572Z" fill="black" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >

                    <div className="md:hidden font-umbaMedium" id="mobile-menu">

                        <Link
                            href="/home"
                            activeClass="home"
                            to="home"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer hover:bg-buttonPaint text-black hover:text-white block px-3 py-2 rounded-md text-base "
                        >
                            Home
                        </Link>
                        <Link
                            href="/#projects"
                            activeClass="projects"
                            to="projects"
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="cursor-pointer hover:bg-buttonPaint text-black hover:text-white block px-3 py-2 rounded-md text-base"
                        >
                            Projects
                        </Link>

                        <Link
                            href="/#services"
                            activeClass="services"
                            to="services"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer hover:bg-buttonPaint text-black hover:text-white block px-3 py-2 rounded-md text-base"
                        >
                            Services
                        </Link>

                        <Link
                            href="/#contact"
                            activeClass="contact"
                            to="contact"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer hover:bg-buttonPaint text-black hover:text-white block px-3 py-2 rounded-md text-base"
                        >
                            Contact
                        </Link>

                        <Link
                            href="/#clients"
                            activeClass="clients"
                            to="clients"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer hover:bg-buttonPaint text-black hover:text-white block px-3 py-2 rounded-md text-base"
                        >
                            Clients
                        </Link>
                    </div>


                </Transition>
            </nav>
        </div>
    );
}
