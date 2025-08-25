import Image from 'next/image';
import { Button } from '../ui/button';




export function WhoWeAre() {
  return (
    <section className="bg-white py-24 sm:py-32" id='about'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Image Column */}
          <div className="relative h-[500px] -mt-24 lg:h-full">
            <div className="absolute top-0 left-0 w-[70%] lg:w-[80%] z-10">
              <Image
                src="/about-1.png" // Replace with your top image
                alt="Feature 1"
                width={400}
                height={250}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="absolute md:top-1/3 top-[15%] mt-10 right-0 lg:w-[55%] w-[40%] z-20 ">
              <Image
                src="/about-2.png"  // Replace with your middle image
                alt="Feature 2"
                width={350}
                height={400}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="absolute bottom-0 top-1/2 mt-52  w-[60%] z-30 hidden lg:block">
               <Image
                src="/about-3.png"  // Replace with your bottom image
                alt="Feature 3"
                width={400}
                height={300}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
          
          {/* Text Content Column */}
          <div className="lg:pl-8 lg:pt-4 -mt-36 md:mt-0">
            <div className="relative">
               <div className="absolute -top-8 right-24 flex items-center">
               <Image 
          src="/avatar.png" 
          alt="avatar"
          width={70}
          height={70}
        />
               </div>
              <p className="font-semibold text-blue-600">About</p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Who We Are ?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              <span className='text-[#025AFA] font-bold'>MISSION</span> At Arison Tech Group, our mission is to bridge the gap between innovation and real-world impact. We are dedicated to developing cutting-edge digital products and services that empower businesses, enhance productivity, and unlock new opportunities for growth.

 Our team is driven by creativity, integrity, and a relentless pursuit of excellence, ensuring that every project reflects our commitment to quality and innovation.  
</p>
<p className="mt-6 text-lg leading-8 text-gray-600">
<span className='text-[#025AFA] font-bold'>VISION</span> Arison Tech Group envisions a future where technology serves as the foundation for progress, inclusivity, and opportunity. We aspire to become a globally recognized leader in digital innovation, creating solutions that not only solve today’s challenges but also anticipate tomorrow’s needs.              </p>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}