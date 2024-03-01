"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import styles from "../../styles/Navbar.module.css";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="/next.svg" alt="Logo" width={100} height={100} />
      </Link>

      <nav className="flex gap-2">

          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/menu.svg"
                alt="Logo"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content w-full">
              <>
                <Image src="/next.svg" alt="Logo" width={100} height={100} />
                <div className="wrapper flex flex-col justify-between items-center p-5">
                  <div className="lg:flex gap-x-10">
                    <div
                      className={`lg:flex flex flex-col gap-y-12 mt-10 items-center ${styles.nav}`}
                    >
                      <Link
                        href="/"
                        className={
                          pathname === "/" ? styles.active : styles.inactive
                        }
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className={
                          pathname === "/about"
                            ? styles.active
                            : styles.inactive
                        }
                      >
                        About Us
                      </Link>
                      <DropdownMenu>
                        <SignedIn>
                          <DropdownMenuTrigger
                            className={
                              pathname === "/profile"
                                ? styles.active
                                : styles.inactive
                            }
                          >
                            Profiles
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>
                              Emerging Leaders
                            </DropdownMenuItem>
                            <DropdownMenuItem>Entrepreneurs</DropdownMenuItem>
                            <DropdownMenuItem>Startups</DropdownMenuItem>
                            <DropdownMenuItem>
                              Emerging Politicians
                            </DropdownMenuItem>
                            <DropdownMenuItem>Business</DropdownMenuItem>
                          </DropdownMenuContent>
                        </SignedIn>
                      </DropdownMenu>
                      <Link
                        href="/contact"
                        className={
                          pathname === "/contact"
                            ? styles.active
                            : styles.inactive
                        }
                      >
                        Contact Us
                      </Link>
                    </div>
                    <div className="flex flex-col justify-center mt-24 space-y-12 cursor-pointer">
                    {/* <SignedIn>
                      <UserButton afterSignOutUrl="/" showName />
                      </SignedIn> */}
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
              </>
            </SheetContent>
          </Sheet>
      </nav>
    </header>
  );
};

export default MobileNav;

