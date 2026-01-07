"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin, Menu, LogOut, LogIn, Briefcase, Code, BrainCircuit, MessageSquare, Star } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { HuggingFaceIcon } from "@/components/icons";
import { Separator } from "@/components/ui/separator";


const navLinks = [
  { href: "#projects", label: "Projects", icon: Code },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#hugging-face", label: "Spaces", icon: Star },
  { href: "#articles", label: "Articles", icon: MessageSquare },
  { href: "#tech-stack", label: "Skills", icon: BrainCircuit },
];

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">{siteConfig.name}</span>
        </Link>

        <div className="hidden flex-1 md:flex md:justify-center">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex" asChild>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:inline-flex" asChild>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <ThemeToggle />
          {isLoggedIn ? (
            <Button variant="ghost" size="icon" onClick={handleLogout} aria-label="Logout" className="hidden md:inline-flex">
              <LogOut className="h-5 w-5" />
            </Button>
          ) : (
            <Button variant="ghost" size="icon" asChild aria-label="Login" className="hidden md:inline-flex">
              <Link href="/login">
                <LogIn className="h-5 w-5" />
              </Link>
            </Button>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
               <div className="flex flex-col h-full">
                <div className="flex-grow">
                    <Link href="/" className="flex items-center mb-6">
                        <span className="text-lg font-bold">{siteConfig.name}</span>
                    </Link>
                    <nav className="flex flex-col space-y-2">
                    {navLinks.map((link) => (
                        <SheetClose key={link.href} asChild>
                            <Link
                                href={link.href}
                                className="flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent"
                            >
                                <link.icon className="h-5 w-5" />
                                {link.label}
                            </Link>
                        </SheetClose>
                    ))}
                    </nav>
                </div>

                <Separator className="my-4"/>

                <div className="flex items-center justify-center gap-2 mb-4">
                     <Button variant="ghost" size="icon" asChild>
                        <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                        </a>
                    </Button>
                     <Button variant="ghost" size="icon" asChild>
                        <a href={siteConfig.huggingface} target="_blank" rel="noopener noreferrer" aria-label="Hugging Face">
                        <HuggingFaceIcon className="h-5 w-5" />
                        </a>
                    </Button>
                </div>

                 {isLoggedIn ? (
                    <Button onClick={handleLogout} className="w-full">
                        <LogOut className="mr-2 h-5 w-5" /> Logout
                    </Button>
                    ) : (
                    <Button asChild className="w-full">
                        <Link href="/login">
                         <LogIn className="mr-2 h-5 w-5" /> Login
                        </Link>
                    </Button>
                 )}
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
