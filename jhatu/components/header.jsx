import React from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Link from"next/link";
import Image from "next/image"; 
import { Button } from "./ui/button";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";




const Header = () => {
    return (
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50
        support-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto flex items-center justify-between  h-16 px-4">
                <Link href="/">
                    <Image src="/logo.png"
                        alt="Sensai logo"
                        width={200}
                        height={50}
                        className="h-12 py-1 w-auto object-contain"
                    />
                </Link>
                <div className="flex items-center space-x-2 mid:space-x-4">
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button variant="outline"> 
                                <LayoutDashboard className="h-4 w-4" />
                                <span className="hidden md:block">industry insights</span>
                        </Button>
                        </Link>
                   
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button>
                                <StarIcon className="h-4 w-4" />
                                <span className="hidden md:block">Growth tools</span>
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                           
                            <DropdownMenuItem>
                                <Link href="/resume" className="flex items-center gap-2">
                                    <FileText className="h-4 w-4" />
                                    <span>Build Resume</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/ai-cover letter" className="flex items-center gap-2">
                                    <PenBox className="h-4 w-4" />
                                    <span>Cover letter</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/interview" className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4" />
                                    <span>Interview prep</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <Button variant="outline">
                                Sign In
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-15 h-15",
                                    userButtonPopoverCard: "shadow-xl",
                                    userPreviewMainIdentifier:"font-semibold",
                                },
                                afterSignOutUrl: "/",
                         }}
                        />
                    </SignedIn>
                </div>
              </nav>
           </header>
 );
};

export default Header;
