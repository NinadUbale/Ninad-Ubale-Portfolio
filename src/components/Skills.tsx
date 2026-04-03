"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "SQL", "C", "C++"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "Microservices", "JWT", "RBAC", "Hibernate"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Databases & Cloud",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "AWS (EC2, S3)"],
  },
  {
    title: "Concepts & Tools",
    skills: ["Git", "Docker", "Postman", "System Design", "Prompt Engineering", "GenAI APIs"],
  },
];

export default function Skills() {
  return (
    <section className="relative w-full bg-[#121212] py-24 px-6 md:px-24 z-20 border-t border-white/5" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6 border-b border-white/10 pb-4 inline-block">
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md"
            >
              <h3 className="text-xl font-medium text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm font-light hover:bg-white/10 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
