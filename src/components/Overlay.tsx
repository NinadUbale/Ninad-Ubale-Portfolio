

import { motion, useTransform, MotionValue } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 25% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3: 55% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-10 md:px-24">
        
        {/* Section 1 - Center */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
           Ninad Ubale.
          </h1>
          <p className="text-xl md:text-3xl text-zinc-300 mt-4 font-light">
            Web/App Developer and AI enthusiast.
          </p>
        </motion.div>

        {/* Section 2 - Left */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-x-10 md:inset-x-24 top-1/2 -translate-y-1/2 flex items-center justify-start text-left"
        >
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-white max-w-2xl drop-shadow-xl">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">digital experiences.</span>
          </h2>
        </motion.div>

        {/* Section 3 - Right */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-x-10 md:inset-x-24 top-1/2 -translate-y-1/2 flex items-center justify-end text-right"
        >
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-white max-w-2xl drop-shadow-xl">
            Bridging design and <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">engineering.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
