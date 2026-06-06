"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, FolderCode, Award, Cpu, Download, ExternalLink, X } from 'lucide-react';

// --- DATA ---
const PROJECTS = [
  {
    title: "Basic Port Forwarding Implementation in Cisco Packet Tracer",
    desc: "This project demonstrates the fundamental principles of Port Forwarding (also known as Destination NAT) within a routed network environment. Using Cisco Packet Tracer, I configured a 2911 router to map incoming traffic from an external network directly to a specific service hosted on an internal server. The setup includes a segmented network architecture that showcases how administrators can provide public access to private resources while maintaining network security.",
    tech: ["Cisco", "Networking", "NAT"], image: "/portforward.webp", link: ""
  },
  {
    title: "DelFod: Scalable E-commerce Platform for Food Delivery",
    desc: "A full-stack e-commerce application developed to manage food ordering, menu inventory, and customer orders. The system utilizes a modular architecture to handle real-time database updates and secure transaction processing. It features a responsive frontend design, dynamic server-side rendering for improved page load speeds, and integrated payment workflows for automated order management.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"], image: "/ecommerce_pro.webp", link: "https://commerce-roan-beta.vercel.app/"
  },
  {
    title: "Intelligent E-book RAG System with n8n and Supabase Vector",
    desc: "Developed an automated Retrieval-Augmented Generation (RAG) pipeline using n8n to ingest e-book content into a Supabase Vector Store. The system leverages HuggingFace embeddings for semantic search and integrates with the Telegram API via an AI Agent, allowing users to query document-specific knowledge in real-time. This project demonstrates advanced workflow automation, vector database management, and LLM orchestration.",
    tech: ["n8n", "Supabase Vector", "HuggingFace"], image: "/RAG_pro.webp", link: ""
  },
];

const truncateText = (text: string, limit: number) => {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

const CERTIFICATES = [
  { title: "3rd Place LKS Sidoarjo 2026", provider: "Kemendikbud", year: "2026", image: "/JuaraLKS.webp", file: "/juara LKS.pdf" },
  { title: "AtswaNesa Competition Participant", provider: "ATSWANESA", year: "2025", image: "/AtswaNesa.webp", file: "/sert.pdf" },
  { title: "Network Simulation Competition Finalist", provider: "Universitas Negeri Jakarta", year: "2025", image: "/finalisunj.webp", file: "/finalis unj.pdf" },
  { title: "Course IDN Cyber Security", provider: "IDN", year: "2025", image: "/IDN Cyber Security.webp", file: "/Bootcampt Cyber Security.pdf" },
];

const SKILLS = [
  { name: "Debian", category: "System Administration", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-plain.svg" },
  { name: "Ubuntu", category: "System Administration", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg" },
  { name: "TailwindCSS", category: "FRONTEND", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Ansible", category: "AUTOMATION", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg" },
  { name: "Laravel", category: "BACKEND", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "MySQL", category: "DATABASE", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Python", category: "BACKEND", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Pandas", category: "DATA SCIENCE", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "ScikitLearn", category: "DATA SCIENCE", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "Next JS", category: "FULL STACK", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Numpy", category: "DATA SCIENCE", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { name: "Git", category: "COLLABORATION", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "n8n", category: "AUTOMATION", image: "/n8n-color.svg" },
  { name: "Kotlin", category: "ANDROID DEVELOPMENT", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
  { name: "Figma", category: "DESIGN", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Flutter", category: "MOBILE DEVELOPMENT", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Flask", category: "BACKEND", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
  { name: "Supabase", category: "DATABASE", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Vercel", category: "HOSTING", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "Docker", category: "CONTAINERIZATION", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Proxmox", category: "VIRTUALIZATION", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/proxmox/proxmox-original-wordmark.svg" },
];

const Showcase = () => {
  const [activeTab, setActiveTab] = useState('Projects');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const tabs = [
    { name: 'Projects', icon: FolderCode },
    { name: 'Certificates', icon: Award },
    { name: 'Skills', icon: Cpu },
  ];

  return (
    <section id="showcase" className="relative py-24 px-6 overflow-hidden">
      {/* Background Grid & Gradient dipindahkan ke layout utama sesuai saran sebelumnya */}

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Portfolio <span className="text-cyan-400">Showcase</span></h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#0B0F1A]/80 backdrop-blur-md p-1 rounded-full border border-white/10 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === tab.name ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
              >
                <tab.icon size={18} /> {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`grid gap-6 ${activeTab === 'Skills' ? 'grid-cols-2 md:grid-cols-6' : 'grid-cols-1 md:grid-cols-3'}`}
          >
            {activeTab === 'Projects' && PROJECTS.map((p, i) => (
              <div key={i} className="bg-[#0B0F1A]/90 rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all">
                <div className="relative h-48 overflow-hidden group">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                  {/* Tombol View di atas gambar (muncul saat hover) */}
                  <button
                    onClick={() => setSelectedProject(p)}
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                  >
                    <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full flex gap-2 items-center">
                      <Eye size={16} /> View Project
                    </div>
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{truncateText(p.title, 30)}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {truncateText(p.desc, 120)}
                  </p>

                  {/* Baris Tombol & Kategori */}
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between gap-2">

                    {/* Tech Stack (Satu baris) */}
                    <div className="flex flex-wrap gap-1">
                      {p.tech.map(t => (
                        <span key={t} className="bg-white/5 px-2 py-1 rounded text-[10px] whitespace-nowrap">
                          {t}
                        </span>
                      ))}
                    </div>

                    {p.link && (
                      <a href={p.link} target="_blank" className="text-xs flex items-center gap-1 text-cyan-400 hover:text-white">
                        Link <ExternalLink size={12} />
                      </a>
                    )}
                    {/* Tombol View kedua di sebelah kategori */}
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="text-xs flex items-center gap-1 text-cyan-400 hover:text-white"
                    >
                      View <ExternalLink size={12} />
                    </button>

                  </div>
                </div>
              </div>
            ))}

            {activeTab === 'Certificates' && CERTIFICATES.map((c, i) => (
              <div key={i} className="bg-[#0B0F1A]/90 rounded-2xl border border-white/10 overflow-hidden hover:border-fuchsia-500/50 transition-all">
                <div
                  className="relative h-48 cursor-pointer overflow-hidden group"
                  onClick={() => setSelectedImage(c.image)}
                >
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 will-change-transform" />
                  {/* Overlay saat hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">Click to View</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white tracking-tight mb-1">{c.title}</h3>
                  <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">{c.provider}</p>
                  <a
                    href={c.file}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 mt-4 rounded-lg border border-gray-700 hover:border-gray-500 bg-transparent text-gray-300 hover:text-white transition-all duration-300"
                    download={c.title + ".pdf"}
                  >
                    <Download size={14} />
                    <span className="font-medium">Download</span>
                  </a>
                </div>
              </div>
            ))}

            {activeTab === 'Skills' && SKILLS.map((s, i) => (
              <div key={i} className="bg-[#0B0F1A]/90 p-6 rounded-xl border border-white/10 text-center flex flex-col items-center hover:border-white/20 transition-all">
                <div className="w-14 h-14 bg-white/5 rounded mb-3 flex items-center justify-center">
                  <img src={s.image} alt={s.name} className="w-12 h-12 object-contain" />
                </div>
                <span className="text-sm font-bold">{s.name}</span>
                <span className="text-[10px] text-gray-500 uppercase">{s.category}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div className="bg-[#0B0F1A] max-w-2xl w-full rounded-2xl p-6 border border-white/10" onClick={(e) => e.stopPropagation()}>
              <img src={selectedProject.image} className="w-full h-64 object-cover rounded-xl mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.desc}</p>
              <div className="flex mt-5 flex-wrap gap-1">
                {selectedProject.tech.map((tech: string) => (
                  <span key={tech} className="bg-white/5 px-2 py-1 rounded text-[10px] whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white"><X size={32} /></button>
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              src={selectedImage}
              className="max-w-full max-h-[80vh] rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Showcase;