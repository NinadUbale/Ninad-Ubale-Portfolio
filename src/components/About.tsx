"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section className="relative w-full bg-[#121212] py-24 px-6 md:px-24 z-20" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6 border-b border-white/10 pb-4 inline-block">
            About Me
          </h2>
          <p className="text-2xl md:text-4xl text-zinc-300 font-light leading-relaxed mt-4">
            I am a <span className="text-white font-medium">Software Engineering student</span> specializing in Java backend systems, MERN stack development, and LLM/AI integration. 
          </p>
          <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed mt-8">
            I build scalable REST APIs and microservices handling 500+ concurrent users, and I&apos;m deeply passionate about system design, AI prompt engineering, and solving complex challenges.
          </p>

          <div className="mt-12 flex justify-start">
            <a 
              href="/Ninad_Ubale_Resume.pdf" 
              download="Ninad_Ubale_Resume.pdf"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-light tracking-wide hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md"
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
