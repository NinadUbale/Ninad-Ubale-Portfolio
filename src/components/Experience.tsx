"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Intern - MERN Stack",
    company: "Techonsy Software Pvt. Ltd., Pune",
    date: "Jan 2024 — Present",
    desc: "Developed and maintained 10+ production REST APIs using Node.js, Express.js, and MongoDB supporting CRUD operations and complex database queries. Improved API response time by 25% through query optimization, indexing strategies, and Redis caching. Designed backend architecture handling 500+ concurrent users with stable performance under load.",
    moreInfo: {
      image: "/images/techonsy.png",
      details: "Techonsy Software Pvt. Ltd. is a fast-growing tech solutions company based in Pune, specializing in modern web and mobile application development. During my tenure, I contributed heavily to their core MERN stack architectures, focusing on building scalable backend microservices, optimizing database performance, and delivering highly responsive service infrastructures."
    }
  },
  {
    role: "Python Developer Intern",
    company: "CodSoft",
    date: "2023",
    desc: "Completed an internship focused on Python development, successfully engineering and delivering various foundational Python-based projects and programmatic tasks.",
    moreInfo: {
      image: "/images/codsoft.png",
      details: "CodSoft is an organization that provides project-based learning. During this period, I deepened my understanding of core Python programming paradigms by engineering practical applications, ranging from data processing scripts to algorithmic problem-solving software."
    }
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    if (expandedIndex === idx) setExpandedIndex(null);
    else setExpandedIndex(idx);
  };

  return (
    <section className="relative w-full bg-[#121212] py-24 px-6 md:px-24 z-20 border-t border-white/5" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6 border-b border-white/10 pb-4 inline-block">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex justify-between items-baseline mb-4">
                <h3 className="text-2xl font-medium text-white">{exp.role}</h3>
                <span className="text-sm text-zinc-500 whitespace-nowrap md:ml-4 block mt-2 md:mt-0 font-mono">
                  {exp.date}
                </span>
              </div>
              <p className="text-lg text-emerald-400/80 mb-6">{exp.company}</p>
              <p className="text-zinc-400 font-light leading-relaxed max-w-3xl mb-6">
                {exp.desc}
              </p>

              {exp.moreInfo && (
                <div>
                  <button 
                    onClick={() => toggleExpand(idx)} 
                    className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10"
                  >
                    {expandedIndex === idx ? "Show Less" : "More Info"}
                    {expandedIndex === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  
                  <AnimatePresence>
                    {expandedIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-6"
                      >
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col sm:flex-row gap-6 items-start">
                          <div className="relative w-full sm:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10 shrink-0" style={{ position: "relative" }}>
                            <Image 
                              src={exp.moreInfo.image} 
                              fill 
                              sizes="(max-width: 768px) 100vw, 50vw" 
                              alt="Techonsy Company" 
                              className="object-cover" 
                            />
                          </div>
                          <div className="sm:w-1/2">
                            <h4 className="text-white font-medium mb-3 border-b border-white/10 pb-2 inline-block">About {exp.company.split(' ')[0]}</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">{exp.moreInfo.details}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
