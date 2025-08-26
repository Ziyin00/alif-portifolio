'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// Data array with new, shorter descriptions
const sliderItems = [
  {
    id: 1,
    title: "Strategic Partner",
    description: "Your vision, engineered for scalable growth and industry leadership.",
  },
  {
    id: 2,
    title: "Engineering Excellence",
    description: "Secure, high-performance platforms built on a foundation of quality code.",
  },
  {
    id: 3,
    title: "Integrated Solutions",
    description: "Seamless, end-to-end solutions for a powerful and unified digital ecosystem.",
  },
  {
    id: 4,
    title: "User-Centric Design",
    description: "Powerful engineering meets intuitive design for experiences your users will love.",
  },
  {
    id: 5,
    title: "Results-Driven Innovation",
    description: "Gain a competitive edge with custom technology built to deliver measurable results.",
  },
];

export function Sliders() {
  // Duplicating items for a seamless looping animation
  const duplicatedItems = [...sliderItems, ...sliderItems];

  // Animation controls from Framer Motion to allow pausing/resuming
  const topControls = useAnimation();
  const bottomControls = useAnimation();

  // Animation definitions
  const topAnimation = {
    x: ['0%', '-50%'],
    transition: { ease: 'linear' as const, duration: 45, repeat: Infinity, repeatType: 'loop' as const },
  };
  const bottomAnimation = {
    x: ['-50%', '0%'],
    transition: { ease: 'linear' as const, duration: 45, repeat: Infinity, repeatType: 'loop' as const },
  };

  // Start animations when the component mounts
  useEffect(() => {
    topControls.start(topAnimation);
    bottomControls.start(bottomAnimation);
  }, [topControls, bottomControls]);

  return (
    <div className="absolute bottom-0 left-0 right-0 px-4 md:py-10 pb-4 w-full overflow-hidden">
      <div className="space-y-4">
        
        {/* Top Slider (moves to the left) */}
        <div 
          className="relative md:h-32 h-24 "
          onMouseEnter={() => topControls.stop()}
          onMouseLeave={() => topControls.start(topAnimation)}
        >
          <motion.div className="absolute left-0 flex" animate={topControls}>
            {duplicatedItems.map((item, i) => (
              <div key={`top-${i}`} className="flex-shrink-0 w-[300px] sm:w-[350px] p-2">
                <div className={`w-full h-full rounded-lg px-4 py-2 border border-white/20 text-left transition-colors duration-300  hover:text-black hover:shadow-lg hover:bg-white/90 text-white opacity-50 hover:opacity-100`}>
                  <div className="flex justify-between text-sm mb-1">
                    <p className="font-bold">{item.title}</p>
                  </div>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom Slider (moves to the right) */}
        <div 
          className="relative md:h-32 h-28"
          onMouseEnter={() => bottomControls.stop()}
          onMouseLeave={() => bottomControls.start(bottomAnimation)}
        >
          <motion.div className="absolute left-0 flex" animate={bottomControls}>
            {duplicatedItems.map((item, i) => (
              <div key={`bottom-${i}`} className="flex-shrink-0 w-[300px] sm:w-[350px] p-2">
                <div className="w-full h-full rounded-lg p-4 border border-white/20 text-left text-white backdrop-blur-sm hover:bg-white/90 transition-colors duration-300 hover:text-black hover:shadow-lg  opacity-50 hover:opacity-100">
                  <div className="flex justify-between text-sm mb-1">
                    <p className="font-bold">{item.title}</p>
                  </div>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}