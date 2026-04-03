"use client";

import { motion } from "framer-motion";
import { Trophy, CheckCircle, Target } from "lucide-react";
import Image from "next/image";

export default function Achievements() {
  const achievements = [
    {
      title: "Community Leadership",
      desc: "I currently serve as the Secretary of the college E-Rickshaw R&D Club, managing a team dedicated to researching sustainable campus transport. I have also served on the core organizing committees for major campus events like the TechRythm Fest.",
      icon: <Target className="w-5 h-5" />,
      media: {
        src: "/images/ErickshawClub.jpeg",
        caption: "E rickshaw CLub Inaugration Photo"
      }
    },
    {
      title: "Strategic Discipline",
      desc: "I am a recognized Abacus Grandmaster (honing rapid mental calculation and logic) and a Karate Black Belt, teaching me the value of repetition, patience, and execution.",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      title: "Dynamic Strategy",
      desc: "I also compete as a District Level Basketball Player, reinforcing my reliance on teamwork and dynamic strategy.",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  return (
    <section className="relative w-full bg-[#121212] py-24 px-6 md:px-24 z-20 border-t border-white/5" id="achievements">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6 border-b border-white/10 pb-4 inline-block">
            Beyond the Screen
          </h2>
          <p className="text-xl md:text-3xl text-zinc-300 font-light leading-relaxed mt-4">
            Writing clean code requires immense discipline and strategic thinking—traits I have cultivated far beyond the computer screen.
          </p>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/[0.05]"
            >
              <div className="mt-1 flex-shrink-0 text-emerald-400">
                {item.icon}
              </div>
              <div className="w-full">
                <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                <p className="text-zinc-300 font-light leading-relaxed">
                  {item.desc}
                </p>
                {item.media && (
                  <div className="mt-6">
                    <div className="relative w-full max-w-sm aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10" style={{ position: "relative" }}>
                      <Image 
                        src={item.media.src} 
                        alt={item.media.caption} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 400px" 
                        className="object-cover" 
                      />
                    </div>
                    <p className="text-zinc-500 text-sm mt-2 italic font-light">
                      — {item.media.caption}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
