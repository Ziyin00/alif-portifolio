
import { Button } from "../ui/button";
import { Sliders } from "../core/slider";

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="relative  h-[100vh] scroll-pb-20   flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0745FA] via-[#012c7d9a] to-[#0000008b]">



      {/* Background Pattern */}
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto md:-mt-36 -mt-40">
        {/* Welcome Badge */}
        <div className="mb-6">
          <span className="inline-block border border-white/30 rounded-full px-4 py-1 text-sm text-white cursor-pointer hover:border-white/50 transition-colors">
            Welcome to Arsion Tech &rsaquo;
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white max-w-5xl leading-tight md:mb-6">
          where innovation meets purpose.
        </h1>
        
        {/* Description */}
        <p className="mt-4 md:text-lg text-gray-300 max-w-2xl md:leading-relaxed">
          We craft solutions that transform ideas into impactful digital experiences. 
          Let&apos;s lead the tech revolution together.
        </p>

        {/* CTA Button */}
        <div className="md:my-8 my-2" >
          <Button size="lg" className="bg-white text-black font-bold hover:bg-gray-200 px-8 py-4 text-lg transition-all duration-300">
            Explore
          </Button>
        </div>
      </div>

      {/* Sliders */}
      <div className="">

      <Sliders />
      </div>
      </div>
    </section>
  );
}