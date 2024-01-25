"use client";
import Image from 'next/image';
// components/NavBar.js
import { Share_Tech } from 'next/font/google'

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            const totalDocScrollLength = docHeight - windowHeight;
            const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);

            setScrollProgress(scrollPosition);
        };

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);




    return (
        <div className="fixed top-4 inset-x-0 z-50">
            <div className="lg:max-w-2xl mx-auto px-8">
                <div className="w-full mx-auto">

                    <div className="relative flex flex-col w-full p-3 mx-auto bg-gray/70 ring-1 ring-inset ring-white/10 shadow-thick backdrop-blur-xl backdrop-filter rounded-xl md:rounded-full md:items-center md:justify-between md:flex-row overflow-hidden">





                        <div className="flex flex-row items-center align-center justify-between md:justify-start">


                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 text-zinc-400 hover:text-accent-300 focus:outline-none focus:text-white md:hidden"
                            >
                                <svg
                                    className="w-6 h-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={isOpen ? 'hidden' : 'inline-flex'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                    <path
                                        className={isOpen ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>

                            </button>
                        </div>
                        <nav
                            className={`${isOpen ? 'flex' : 'hidden'
                                } md:flex md:items-end justify-center md:flex-row`}
                        >
                            <ul className="space-y-8 list-none text-sm text-white md:space-y-0 md:ml-auto items-center md:inline-flex justify-center text-center md:text-left gap-3 lg:gap-6">
                                <li>
                                    <Link href="/#about" className="hover:text-[#EE7E72] zoom-on-hover">
                                        ABOUT
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#gigs" className="hover:text-[#EE7E72] zoom-on-hover">
                                        GIGS
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/#artists" className="hover:text-[#EE7E72] zoom-on-hover">
                                        ARTISTS
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/#contact" className="hover:text-[#EE7E72] zoom-on-hover">
                                        CONTACT
                                    </Link>
                                </li>


                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NavBar;