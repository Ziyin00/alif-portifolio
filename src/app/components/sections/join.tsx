import React, { SVGProps } from 'react';

// A simple sparkle/diamond icon to place between the text phrases.
const SparkleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 0L9.414 6.586L16 8L9.414 9.414L8 16L6.586 9.414L0 8L6.586 6.586L8 0Z" />
  </svg>
);

// This component contains one instance of the text and icon.
// It's repeated to create the seamless scrolling effect.
const MarqueeContent = () => (
    <div className="flex items-center mx-6">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-blue-600 shrink-0">
            Join our beta
        </h2>
        <SparkleIcon className="h-5 w-5 md:h-7 md:w-7 text-blue-600 shrink-0 ml-12" />
    </div>
);

export function JoinBeta() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-full px-6 lg:px-8">
                
                {/* 
                  The marquee effect is created by having two identical blocks of content
                  that are both animated to slide from right to left. When one slides
                  out of view, the other is right behind it, creating a seamless loop.
                */}
                <div className="flex overflow-hidden select-none">
                    <div className="flex shrink-0 animate-marquee">
                        <MarqueeContent />
                        <MarqueeContent />
                        <MarqueeContent />
                    </div>
                    <div className="flex shrink-0 animate-marquee" aria-hidden="true">
                        <MarqueeContent />
                        <MarqueeContent />
                        <MarqueeContent />
                    </div>
                </div>

                {/* Description Text Below Marquee */}
                <div className="mt-10 text-center max-w-4xl mx-auto">
                    <p className="text-lg leading-8 text-gray-600">
                        Behind every great innovation is a passionate and skilled team. Meet the brilliant minds at Arsion Tech Group who bring ideas to life with creativity and expertise.
                    </p>
                </div>

            </div>
        </section>
    );
}