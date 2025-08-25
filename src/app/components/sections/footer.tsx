import Link from 'next/link';
import { SVGProps } from 'react';

// Helper SVG Icon Components
const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><path d="M17.5 6.5h.01" /></svg>
);
const TelegramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" {...props}><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" /></svg>
);
const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
);
const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
);
const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085c.645 1.956 2.5 3.375 4.7 3.41A9.87 9.87 0 010 17.54a13.94 13.94 0 007.548 2.212c9.058 0 14.01-7.502 14.01-14.01 0-.213-.005-.426-.015-.637a9.954 9.954 0 002.433-2.52z" /></svg>
);

const quickLinks = {
  column1: [
    { title: 'Home', href: '#hero' },
    { title: 'About Us', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ],
  column2: [
    { title: 'Services', href: '#service' },
    { title: 'Our Work', href: '#projects' },
  ],
};

const socialLinks = [
  { href: '#', icon: InstagramIcon },
  { href: '#', icon: TelegramIcon },
  { href: '#', icon: FacebookIcon },
  { href: '#', icon: LinkedInIcon },
  { href: '#', icon: TwitterIcon },
];

export function Footer() {
  return (
    // The outer div provides padding to make the rounded corners of the footer visible.
    <div className="bg-white p-4 sm:p-6 lg:p-8">
      <footer className="w-full bg-gradient-to-br from-[#0745FA] via-[#012D7D] to-[#000000] rounded-2xl p-8 sm:p-12 text-gray-200">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* Left Section: Brand Info & Socials */}
          <div className="max-w-sm">
            <h3 className="font-bold text-2xl text-white">Arsion Tech</h3>
            <p className="mt-3 leading-relaxed">
              Crafting Tech Solutions That Shape the Future.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} className="hover:text-white transition-colors">
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section: Quick Links */}
          <div>
            <h4 className="font-semibold text-white">Quick Links:</h4>
            <nav className="mt-4 grid grid-cols-2 gap-x-12 gap-y-2">
              {quickLinks.column1.map((link) => (
                <Link key={link.title} href={link.href} className="hover:text-white hover:underline transition-colors">
                  {link.title}
                </Link>
              ))}
              {quickLinks.column2.map((link) => (
                 <Link key={link.title} href={link.href} className="hover:text-white hover:underline transition-colors">
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Bottom Section: Divider & Copyright */}
        <div className="mt-12 border-t border-white/20 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2025 Arsion Tech Group. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}