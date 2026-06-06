"use client";

import React from 'react';
import { Smartphone, Palette, Zap, Globe, Code, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="relative py-24 text-white px-6 overflow-hidden">

      {/* Background Grid */}
      {/* <div
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#828282 1px, transparent 1px), 
                            linear-gradient(90deg, #828282 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* GRADASI CERAH: Kiri Pink (fuchsia) ke Kanan Biru (cyan) */}
      {/* <div className="absolute inset-0 z-0 bg-linear-to-r from-fuchsia-600/15 via-transparent to-cyan-500/20" /> */}

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Bagian Kiri: Teks */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
            Transforming ideas <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 to-cyan-400">
              into digital reality
            </span>
          </h2>

          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I am a passionate <strong>Fullstack Developer & Creative Technologist</strong> dedicated to crafting intuitive and visually stunning digital experiences.
            </p>
            <p>
              With focused learning and hands-on practice, I bridge the gap between creative design and technical implementation.
            </p>
            <p className="text-gray-300 italic border-l-2 border-fuchsia-500 pl-4">
              Membangun pengalaman digital imersif dengan kode bersih, antarmuka modern, dan solusi teknis berkinerja tinggi.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {[
              { icon: Smartphone, label: 'Responsive Design' },
              { icon: Palette, label: 'Modern Design' },
              { icon: Zap, label: 'Performance' }
            ].map((skill, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-fuchsia-500/50 transition-all">
                <skill.icon size={16} className="text-fuchsia-400" />
                <span className="text-sm">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Kanan: Visual */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-88 h-88 md:w-96 md:h-96 rounded-full border border-white/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-linear-to-br from-fuchsia-500 to-blue-600 rotate-2 rounded-full blur opacity-20"></div>
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border border-white/10 flex items-center justify-center">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500 to-blue-600 rotate-2 rounded-full blur opacity-20"></div>

          <div className="w-56 h-56 md:w-60 md:h-60 rounded-full border border-white/5" />
          <img
            src="/pp.jpg"
            alt="Raya Pratama"
            className="absolute w-48 h-48 md:w-52 md:h-52 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
            />
            </div>
            </div>

          {/* Kartu Statistik - Disesuaikan warnanya agar matching */}
          <div className="absolute w-32 top-0 left-0 bg-[#0B0F1A]/80 backdrop-blur-md p-4 rounded-xl border border-fuchsia-500/20 shadow-xl flex items-center gap-3">
            <Globe className="text-fuchsia-400" />
            <div>
              <div className="font-bold text-lg">20+</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">Skills</div>
            </div>
          </div>

          <div className="absolute bottom-10 -right-4 bg-[#0B0F1A]/80 backdrop-blur-md p-4 rounded-xl border border-cyan-500/20 shadow-xl flex items-center gap-3">
            <Code className="text-cyan-400" />
            <div>
              <div className="font-bold text-lg">3</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">Projects</div>
            </div>
          </div>

          <div className="absolute -bottom-10 left-0 bg-[#0B0F1A]/80 backdrop-blur-md p-4 rounded-xl border border-blue-500/20 shadow-xl flex items-center gap-3">
            <Award className="text-blue-400" />
            <div>
              <div className="font-bold text-lg">5</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">Certificates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;