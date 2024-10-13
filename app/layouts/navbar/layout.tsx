'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import asanasIco from "./icons/asanas.svg";
import '../../globals.css';

export default function Navbar() {
    const [page, setPage] = useState({
        asanas: false,
        home: false,
        settings: false
    });
    const currentPage = usePathname();

    useEffect(() => {
        if (currentPage === '/asanas') {
            setPage({   asanas: true,
                        home: false,
                        settings: false
            })
        } else if (currentPage === '/') {
            setPage({   asanas: false,
                        home: true,
                        settings: false
            })
        } else if (currentPage ==='/settings') {
            setPage({   asanas: false,
                        home: false,
                        settings: true
            })
        }
    }, [currentPage]);
    return (
        <div className="btm-nav">
            {page.asanas ?
                <button className="active bg-pink-200 text-pink-600">
                    <Image src={asanasIco} alt="asanasIcon" width={20} height={20}/>
                    <span className="btm-nav-label">Asanas</span>
                </button>
                :
                <Link href="./asanas" className="bg-pink-200 text-pink-600">
                    <Image src={asanasIco} alt="asanasIcon" width={20} height={20}/>
                        
                    <span className="btm-nav-label">Asanas</span>
                </Link>
            }
            
            
            
            {page.home ?
                <button className="active border-blue-600 bg-blue-200 text-blue-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="btm-nav-label">Home</span>
                </button> 
                :
                <Link href="/" className="border-blue-600 bg-blue-200 text-blue-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="btm-nav-label">Home</span>
                </Link> 
            }
            
            {page.settings ?
                <button className="active bg-teal-200 text-teal-600">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="btm-nav-label">Settings</span>
                </button>
                :
                <Link href="/settings" className="bg-teal-200 text-teal-600">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="btm-nav-label">Settings</span>
                </Link>
            }

            
        </div>
    );
}