"use client"
import Image from 'next/image';
import { useState, SVGProps } from 'react';

// Helper components for icons
const BookOpenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);

const InformationCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

// Service Data
const services = [
  {
    icon: BookOpenIcon,
    title: 'Custom Software Development',
    description: 'Tailored solutions for your unique business needs.',
    image: '/custom-1.jpeg',
  },
  {
    icon: LinkIcon,
    title: 'Web & Mobile Applications',
    description: 'Sleek, user-friendly, and high-performing apps.',
    image: '/web-1.jpeg',
  },
  {
    icon: InformationCircleIcon,
    title: 'AI Solutions',
    description: 'AI Solutions provides secure, scalable, and intelligent cloud integrations.',
    image: '/ai.jpeg',
  },
];

export function WhatWeDo() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Fallback image when nothing is selected
  const displayedImage = selectedService
    ? services.find((s) => s.title === selectedService)?.image
    : '/defualt.gif';

  return (
    <section className="bg-white py-24 sm:py-32 md:mt-20 -mt-20" id="service">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl md:text-center relative">
          <div className="absolute md:-top-8 -top-10 md:left-24 left-40 flex items-center">
            <Image src="/avatar.png" alt="avatar" width={80} height={80} />
          </div>
          <p className="text-base font-semibold leading-7 text-[#025AFA]">Services</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            What We Do
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We don&apos;t just build software — we create meaningful experiences that make a difference.
          </p>
        </div>

        {/* Main Image */}
        <div className="relative mt-16 w-full">
          <Image
            key={displayedImage}
            src={displayedImage}
            alt="Our Services"
            width={1000}
            height={400}
            className="w-[95%] md:h-[600px] h-[400px] object-fill rounded-2xl shadow-xl transition-all duration-500"
          />
        </div>

        {/* Services Grid (Click instead of hover) */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => {
            const isActive = selectedService === service.title;
            return (
              <div
                key={service.title}
                className={`rounded-xl p-8 cursor-pointer border transition-all ${
                  isActive ? 'bg-gray-100  shadow-md' : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedService(service.title)}
              >
                <service.icon className="h-7 w-7 text-gray-700" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold leading-6 text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
