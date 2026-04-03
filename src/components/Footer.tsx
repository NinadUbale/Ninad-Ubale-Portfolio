"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#121212] py-24 px-6 md:px-24 z-20 border-t border-white/5 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">
            Strategically Engineered • Precision Driven
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-zinc-300 mb-12 italic">
            "Engineering high-performance systems with a strategist's discipline."
          </h2>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-500 text-sm font-mono tracking-tighter">
              Ninad Ubale @ 2026
            </p>
            <p className="text-zinc-600 text-xs tracking-widest uppercase">
              Designed for the next era of tech
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
