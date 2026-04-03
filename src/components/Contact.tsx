"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM20.45 20.45h-3.56v-5.56c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.66H9.36V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29z" />
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("sent");
          formRef.current?.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 md:px-24 z-20 border-t border-white/5" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6 border-b border-white/10 pb-4 inline-block">
              Let&apos;s Talk
            </h2>
            <h3 className="text-4xl md:text-5xl font-medium text-white mb-6">
              Got a project in mind?
            </h3>
            <p className="text-zinc-400 font-light leading-relaxed mb-8">
              I&apos;m currently looking for new opportunities in full-stack engineering, backend systems, or GenAI development. If you want to build something amazing, my inbox is always open.
            </p>

            <div className="space-y-2 text-zinc-300 font-light">
              <p>ninadubale04@gmail.com</p>
              <p>+91 77579 27989</p>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>

          <div className="mt-16 flex gap-6">
            <a href="https://linkedin.com/in/ninad-ubale" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group">
              <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm tracking-wide">LinkedIn</span>
            </a>

            <a href="https://github.com/NinadUbale" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group">
              <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <GithubIcon className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm tracking-wide">GitHub</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:w-1/2 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md"
        >
          <form className="flex flex-col gap-6" ref={formRef} onSubmit={handleSubmit}>
            
            <div>
              <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">Name</label>
              <input type="text" id="name" name="name" placeholder="Name" required className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400/50 transition-colors" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">Email</label>
              <input type="email" id="email" name="email" placeholder="Email Address" required className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400/50 transition-colors" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="How can I help you?" required className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400/50 transition-colors resize-none"></textarea>
            </div>

            <button type="submit" disabled={status !== "idle"} className="mt-2 w-full bg-white text-black font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden">
              
              {status === "idle" && (
                <span className="flex items-center gap-2">
                  Send Message <Send className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              )}

              {status === "sending" && (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
                  Sending...
                </span>
              )}

              {status === "sent" && (
                <motion.span initial={{ y: 20 }} animate={{ y: 0 }} className="flex items-center gap-2 text-emerald-600">
                  Message Sent <CheckCircle2 className="w-4 h-4" />
                </motion.span>
              )}

              {status === "error" && (
                <motion.span initial={{ y: 20 }} animate={{ y: 0 }} className="flex items-center gap-2 text-red-600">
                  Failed to send <AlertCircle className="w-4 h-4" />
                </motion.span>
              )}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-xs text-center">
                Something went wrong. Please try again later.
              </p>
            )}

          </form>
        </motion.div>

      </div>
    </section>
  );
}