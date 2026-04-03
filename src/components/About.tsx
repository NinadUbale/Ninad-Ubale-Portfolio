"use client";

import { motion } from "framer-motion";

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
        </motion.div>
      </div>
    </section>
  );
}
