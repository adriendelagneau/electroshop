'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import CartIcon from './CartIcon';
import ThemeToggleButton from './buttons/ThemeToggleButto';

const Header = () => {
    // Use the useSession hook from next-auth/react to get session information
    const { data: session, status } = useSession();

    // State to manage scroll visibility
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    // useEffect hook to handle scroll events and update visibility state
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 60);
            setPrevScrollPos(currentScrollPos);
        };

        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <header className={`w-full  bg-skin-inverted text-skin-base transition-all fixed top-0 h-16 z-50 ${!visible && 'top-[-64px]'} left-[50%] translate-x-[-50%] max-w-screen-2xl`}>
          <nav className='flex items-center justify-between w-full h-full px-4 py-2'>
    <div className='hidden w-1/4 sm:inline-flex'>
    <Link href={"/"} >
        <Image src={"https://res.cloudinary.com/dos8mey8r/image/upload/v1705394086/electro/logo11_l1u82h.png"} width={50} height={50} alt='' />
    </Link>
    </div>
    <div className='w-1/2 text-xl font-Lemon sm:text-center sm:text-3xl'>
        
    <Link href={"/"} >
        Electro Store
    </Link>
    </div>
    <ul className='flex items-center justify-end w-1/4 gap-4'>
        <ThemeToggleButton />
        <li>
            {session?.user ? (
                session?.user.role === "admin" ? (
                    <Link href={"/dashboard"}>dashboard</Link>
                ) : (
                    <Link href={`/profile/${session?.user?._id}`}>profile</Link>
                )
            ) : (
                <Link href={"/register"}>login</Link>
            )}
        </li>
        <li>
            {session?.user.role !== "admin" && (<CartIcon />)
            }
        </li>
    </ul>
</nav>
        </header>
    )
}

export default Header
