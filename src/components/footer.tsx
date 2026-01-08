import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { HuggingFaceIcon } from "@/components/icons";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#hugging-face", label: "Spaces" },
  { href: "#articles", label: "Articles" },
  { href: "#tech-stack", label: "Skills" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background text-foreground">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        {/* About Section */}
        <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">{siteConfig.name}</h3>
            <p className="text-muted-foreground">{siteConfig.tagline}</p>
             <div className="flex items-center space-x-2 mt-2">
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
        </div>

        {/* Quick Links Section */}
        <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
                {navLinks.map(link => (
                    <li key={link.href}>
                        <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                           {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        
        {/* Contact Section */}
        <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">yohanesegipratama26@gmail.com</a>
                </div>
                 {/* <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <span>+1 (234) 567-890</span>
                </div> */}
            </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container py-4 flex items-center justify-center">
            <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
