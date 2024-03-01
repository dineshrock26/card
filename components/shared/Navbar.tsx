"use client";

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from 'next/navigation';
// import styles from './Navbar.module.css'; // Import CSS module for custom styles
import styles from '../../styles/Navbar.module.css';



const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='wrapper lg:flex-1 lg:flex justify-between items-center p-5'>
            <div className='hidden lg:flex items-center'>
                <Link href='/'>Logo</Link>
            </div>
            <div className='lg:flex gap-x-10'>
                <nav className={`hidden lg:flex gap-x-12 items-center ${styles.nav}`}>
                    <Link href='/' className={pathname === '/' ? styles.active : styles.inactive}>Home</Link>
                    <Link href='/about' className={pathname === '/about' ? styles.active : styles.inactive}>About Us</Link>
                    <DropdownMenu>
                        <SignedIn>
                            <DropdownMenuTrigger className={pathname === '/profile' ? styles.active : styles.inactive}>Profiles</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Emerging Leaders</DropdownMenuItem>
                                <DropdownMenuItem>Entrepreneurs</DropdownMenuItem>
                                <DropdownMenuItem>Startups</DropdownMenuItem>
                                <DropdownMenuItem>Emerging Politicians</DropdownMenuItem>
                                <DropdownMenuItem>Business</DropdownMenuItem>
                            </DropdownMenuContent>
                        </SignedIn>
                    </DropdownMenu>
                    <Link href='/contact' className={pathname === '/contact' ? styles.active : styles.inactive}>Contact Us</Link>
                </nav>
                <div className='md:flex justify-end space-x-12 hidden'>
                    <UserButton afterSignOutUrl='/' showName appearance={{ elements: { text: '6px' }}} />
                <SignedOut>
                    <Button asChild>
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
                <SignedIn>
                    <Button asChild>
                        <Link href="/createcard">Create your Card</Link>
                    </Button>
                </SignedIn>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
