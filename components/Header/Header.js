import React, { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { Popover, Transition } from '@headlessui/react';
import Logo from "../../public/logo.svg";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className=" shadow-sm fixed w-full  z-10">
                <div className="w-full">
                    <div className="flex items-center container m-auto font-umbaMedium h-20 w-full">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center space-x-5 mt-4">
                                <Link href="/">
                                    <a>
                                        <Image className="cursor-pointer" src={Logo} alt="Logo" height={39} width={123} />
                                    </a>
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        className="cursor-pointer hover:bg-buttonPaint text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        activeClass="Home"
                                        href="/"
                                        smooth={true}
                                        offset={50}
                                        duration={500}

                                    >
                                        Home
                                    </Link>
                                    <Link
                                        activeClass="about"
                                        to="about"
                                        href="/#projects"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-buttonPaint text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        activeClass="work"
                                        to="work"
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
                                        to="work"
                                        href="/"
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
                                </div>
                            </div>
                        </div>
                        <div className=" flex md:hidden ">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
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
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
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

                    <div className="md:hidden" id="mobile-menu">

                        <Link
                            href="/home"
                            activeClass="home"
                            to="home"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            activeClass="about"
                            to="about"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </Link>

                        <Link
                            href="/work"
                            activeClass="work"
                            to="work"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/services"
                            activeClass="services"
                            to="services"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Services
                        </Link>

                        <Link
                            href="/contact"
                            activeClass="work"
                            to="work"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </Link>
                    </div>


                </Transition>
            </nav>
        </div>
    );
}
