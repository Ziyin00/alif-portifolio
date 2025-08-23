'use client';
import { motion } from 'framer-motion';

const sliderItems = [
  { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 },
];

export function Sliders() {
  const duplicatedItems = [...sliderItems, ...sliderItems];

  const sliderVariants = (direction: 'left' | 'right') => ({
    animate: {
      x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
      transition: {
        ease: 'linear' as const,
        duration: 30,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
  });

  return (
    <div className="absolute bottom-0 left-0 right-0 px-4 py-10 w-full overflow-hidden">
      <div className="space-y-4">
        {/* Top Slider (moves to the left) */}
        <div className="relative h-32 overflow-hidden">
          <motion.div
            className="absolute left-0 flex"
            variants={sliderVariants('left')}
            animate="animate"
          >
            {duplicatedItems.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[300px] sm:w-[350px] p-2">
                <div className={`w-full h-full rounded-lg p-4 border border-white/20 text-left ${ i === 2 ? 'bg-white/90 text-black shadow-lg' : 'bg-white/10 text-white backdrop-blur-sm' }`}>
                  <div className="flex justify-between text-sm mb-2">
                    <p className="font-bold">LanguageGUI</p>
                    <p>10:32 AM</p>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom Slider (moves to the right) */}
        <div className="relative h-32 overflow-hidden">
          <motion.div
            className="absolute left-0 flex"
            variants={sliderVariants('right')}
            animate="animate"
          >
            {duplicatedItems.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[300px] sm:w-[350px] p-2">
                <div className="w-full h-full rounded-lg p-4 border border-white/20 text-left bg-white/10 text-white backdrop-blur-sm">
                  <div className="flex justify-between text-sm mb-2">
                    <p className="font-bold">LanguageGUI</p>
                    <p>10:32 AM</p>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}