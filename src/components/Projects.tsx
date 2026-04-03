"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "StudexaAI | Applied AI & Educational Technology",
      image: "/images/studexaai.png",
      architecture: "Node.js, MongoDB, GenAI APIs, GROQ SDK.",
      engineering: "Built a highly dynamic AI pipeline capable of autonomously generating complex academic quizzes and logical reasoning tasks.",
      impact: "Rather than just calling an API, I implemented rigorous prompt engineering workflows to strictly format the AI's output. I manually evaluated over 100 generated datasets against strict metrics for factual accuracy, consistency, and contextual coherence, dramatically reducing hallucination rates and ensuring production-ready educational content."
    },
    {
      title: "PriceSync | Enterprise Data Management",
      image: "/images/pricesync.png",
      architecture: "Java, Servlets, JSP, MySQL, JWT, RBAC.",
      engineering: "Developed a comprehensive, full-stack Java web application designed to manage and compare pricing across a massive dataset of over 1,000 product records.",
      impact: "Conducted a complete overhaul of the relational database structure. By enforcing strict schema normalization (reducing data redundancy) and implementing custom SQL indexing, I decreased overall database query execution time by 30%. Secured the entire ecosystem using JSON Web Tokens and Role-Based Access Control."
    },
    {
      title: "SubZero | Subscription Lifecycle Engine",
      image: "/images/subzero.png",
      architecture: "MERN Stack, Redis, REST APIs.",
      engineering: "Architected a robust backend system to automate the billing, renewal, and management lifecycles for a user base of 300+ active subscribers.",
      impact: "Identified a severe database bottleneck during bulk renewal checks. I engineered a solution utilizing MongoDB aggregation pipelines for faster data processing and integrated a Redis caching layer, ultimately resulting in a 40% overall performance boost across the application."
    },
    {
      title: "ResolveOS | Secure Incident Tracking",
      image: "/images/resolveos.png",
      architecture: "Node.js, Express, ITSM Standards, RBAC.",
      engineering: "Engineered a secure, enterprise-grade IT ticket management system strictly aligned with ITSM protocols. Designed complex routing logic for automated ticket creation, priority-based assignment, and hierarchical escalation workflows.",
      impact: null
    },
    {
      title: "ForgeBid | Low-Latency Auction Platform",
      image: "/images/forgebid.png",
      architecture: "MERN Stack, Redis, Socket.io.",
      engineering: "Designed a real-time technology asset auction platform where milliseconds matter. Integrated WebSockets to bypass traditional HTTP request limitations, enabling instant, bi-directional communication between the server and multiple concurrent clients for live bidding.",
      impact: null
    }
  ];

  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 md:px-24 z-20 border-t border-white/5" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6 border-b border-white/10 pb-4 inline-block">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col group relative rounded-3xl bg-white/[0.02] border border-white/[0.05] shadow-2xl overflow-hidden hover:bg-white/[0.04] transition-colors duration-500"
            >
              {/* Image Section - Top clearly displaying the screenshot */}
              <div className="relative w-full h-64 sm:h-80 border-b border-white/10 shrink-0" style={{ position: "relative" }}>
                <Image 
                  src={proj.image} 
                  alt={proj.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                />
              </div>

              {/* Data Section - Bottom */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-medium text-white mb-8 border-b border-zinc-800 pb-4">{proj.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">The Architecture</h4>
                    <p className="text-zinc-300 font-light text-sm bg-black/40 px-4 py-3 rounded-xl border border-white/5 inline-block">
                      {proj.architecture}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">The Engineering</h4>
                    <p className="text-zinc-400 font-light leading-relaxed">
                      {proj.engineering}
                    </p>
                  </div>

                  {proj.impact && (
                    <div>
                      <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2 mt-4">The Impact</h4>
                      <p className="text-zinc-400 font-light leading-relaxed">
                        {proj.impact}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
