"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Education() {
  const educationData = [
    {
      degree: "B.E. in Electronics and Telecommunications Engineering",
      institution: "SPPU University",
      score: "Latest Semester CGPA: 7.5",
      status: "Pursuing",
      media: {
        src: "/images/SPPU.jpg",
        caption: "SPPU Campus"
      }
    },
    {
      degree: "11th & 12th Std (HSC Board)",
      institution: "Bharat JR. College, Pune",
      score: "Score: 52%",
      status: "Completed",
      media: {
        src: "/images/bharatjr.jpg",
        caption: "Bharat JR. College"
      }
    },
    {
      degree: "10th Std (SSC Board)",
      institution: "Bhartiya Vidya Bhavan Sulochana Natu Vidya Mandir, Pune",
      score: "Score: 86%",
      status: "Completed",
      media: {
        src: "/images/bvb.webp",
        caption: "Bhartiya Vidya Bhavan"
      }
    }
  ];

  return (
    <section className="relative w-full bg-[#121212] py-24 px-6 md:px-24 z-20 border-t border-white/5" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6 border-b border-white/10 pb-4 inline-block">
            Education
          </h2>
        </motion.div>

        <div className="space-y-16">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex justify-between items-baseline mb-4">
                <h3 className="text-2xl font-medium text-white">{edu.degree}</h3>
                <span className="text-sm text-zinc-500 whitespace-nowrap md:ml-4 block mt-2 md:mt-0 font-mono">
                  {edu.status}
                </span>
              </div>
              <p className="text-lg text-emerald-400/80 mb-2">{edu.institution}</p>
              <p className="text-zinc-400 font-light leading-relaxed max-w-3xl mb-6">
                {edu.score}
              </p>
              
              {edu.media && (
                <div className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10" style={{ position: "relative" }}>
                  <Image 
                    src={edu.media.src} 
                    alt={edu.media.caption} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 500px" 
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out" 
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
