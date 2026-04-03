"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Eye, X } from "lucide-react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<{title: string, issuer: string, image: string} | null>(null);

  const certs = [
    {
      title: "Java Full Stack",
      issuer: "Linkcode",
      image: "/images/linkcode.png",
      date: "Credentials",
    },
    {
      title: "ML & CV",
      issuer: "SAP",
      image: "/images/sap.png",
      date: "Credentials",
    },
    {
      title: "Core Java",
      issuer: "FUEL",
      image: "/images/fuel.png",
      date: "Credentials",
    },
    {
      title: "Python",
      issuer: "CodSoft",
      image: "/images/codsoft.png",
      date: "Credentials",
    },
  ];

  return (
    <>
      <section className="relative w-full bg-[#121212] py-24 px-6 md:px-24 z-20 border-t border-white/5" id="certifications">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6 border-b border-white/10 pb-4 inline-block">
              Certifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certs.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
                className="group flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors duration-300 backdrop-blur-md"
              >
                <div className="relative w-full sm:w-32 h-48 sm:h-32 rounded-xl overflow-hidden shadow-lg border border-white/10 shrink-0" style={{ position: "relative" }}>
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 128px"
                    className="object-cover"
                  />
                  {/* Overlay Preview Button */}
                  <div 
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="text-center sm:text-left w-full">
                  <h3 className="text-xl font-medium text-white mb-2">{cert.title}</h3>
                  <p className="text-emerald-400/80 mb-2 text-sm">{cert.issuer}</p>
                  <p className="text-zinc-500 text-sm font-mono mb-4">{cert.date}</p>
                  <button 
                    onClick={() => setSelectedCert(cert)}
                    className="sm:hidden w-full text-sm py-2 bg-white/5 border border-white/10 rounded-lg text-zinc-300 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                  >
                    <Eye className="w-4 h-4" /> Preview
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-video bg-[#121212] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white border border-white/10 hover:text-black rounded-full text-white transition-colors backdrop-blur-md"
                onClick={() => setSelectedCert(null)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 z-10 text-white">
                <h3 className="text-2xl font-medium">{selectedCert.title}</h3>
                <p className="text-emerald-400/80">{selectedCert.issuer}</p>
              </div>

              <Image 
                src={selectedCert.image} 
                alt={`${selectedCert.title} Preview`} 
                fill 
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain p-2 sm:p-12 md:p-16"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
