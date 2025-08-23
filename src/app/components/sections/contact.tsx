"use client"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { SVGProps, useState } from 'react';

// Social Icon components for clarity
const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.161 0-3.523.012-4.755.068-2.673.122-3.926 1.37-4.048 4.048-.056 1.232-.067 1.595-.067 4.755s.011 3.523.067 4.755c.122 2.673 1.375 3.926 4.048 4.048 1.232.056 1.595.067 4.755.067s3.523-.011 4.755-.067c2.673-.122 3.926-1.375 4.048-4.048.056-1.232.067-1.595.067-4.755s-.011-3.523-.067-4.755c-.122-2.673-1.375-3.926-4.048-4.048-1.232-.056-1.595-.067-4.755-.067zM12 6.874a5.126 5.126 0 100 10.252 5.126 5.126 0 000-10.252zm0 8.812a3.688 3.688 0 110-7.375 3.688 3.688 0 010 7.375zM17.636 5.584a1.441 1.441 0 100 2.882 1.441 1.441 0 000-2.882z" />
  </svg>
);

const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085c.645 1.956 2.5 3.375 4.7 3.41A9.87 9.87 0 010 17.54a13.94 13.94 0 007.548 2.212c9.058 0 14.01-7.502 14.01-14.01 0-.213-.005-.426-.015-.637a9.954 9.954 0 002.433-2.52z" />
  </svg>
);


export function GetInTouch() {

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string>('');
  

  return (
    <section className="bg-gray-100 py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-start">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Get in touch with us.
                <br />
                We&apos;re here to assist you.
            </h2>
            <div className="flex flex-col space-y-4">
                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition">
                    <FacebookIcon className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition">
                    <InstagramIcon className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition">
                    <TwitterIcon className="h-5 w-5" />
                </a>
            </div>
        </div>

        {/* Form */}
        <form  
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setStatus('Message sent successfully!');
            setTimeout(() => {
              setLoading(false);
              setStatus('');
            }, 2000);
          }}
          className="mt-16"
        >
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Your Name</label>
                    <div className="mt-2.5">
                        <Input type="text" id="name" name="name" required className="block w-full border-0 border-b border-gray-400 bg-transparent py-2 px-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:border-blue-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email Address</label>
                    <div className="mt-2.5">
                        <Input type="email" id="email" name="email" required className="block w-full border-0 border-b border-gray-400 bg-transparent py-2 px-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:border-blue-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                    <div className="mt-2.5">
                        <Textarea id="message" name="message" required rows={4} className="block w-full border-0 border-b border-gray-400 bg-transparent py-2 px-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:border-blue-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                 <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="bg-blue-600 text-white font-bold rounded-lg px-6 py-4 transition-all hover:bg-blue-700 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {loading ? "Sending..." : "Leave us a Message →"}
            </Button>
            </div>
            {status && <p className="mt-4 text-sm">{status}</p>}

        </form>
      </div>
    </section>
  );
}