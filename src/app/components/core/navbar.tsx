'use client'
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // toggle background when scrolled
      setIsScrolled(currentScrollY > 50);

      // hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 max-w-screen mx-auto w-full transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-br from-[#0745FA] to-[#012c7ddc] backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/Vector-1.png"
          alt="Alif-logo"
          width={40}
          height={40}
        />
        <span className="text-xl font-bold text-white">Alif Tech</span>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="#hero" className="text-white hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link href="#service" className="text-white hover:text-gray-300 transition-colors">
          Services
        </Link>
        <Link href="#projects" className="text-white hover:text-gray-300 transition-colors">
          Career
        </Link>
        <Link href="#contact" className="text-white hover:text-gray-300 transition-colors">
          Contact
        </Link>
      </nav>

      {/* Button */}
      <Button className="bg-transparent border border-s text-white font-bold hover:bg-opacity-5 transition-colors px-7">
        <Link href="#contact">
        
        Explore
        </Link>
      </Button>
    </header>
  );
}
