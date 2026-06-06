"use client";

import React, { useState, useEffect } from 'react'; // Tambahkan useEffect
import { Zap, Terminal, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false); // Tambahkan state ini
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Home');

  // Efek ini hanya akan jalan di browser, bukan di server
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Jika belum mounted (di server), return null atau skeleton agar aman
  if (!isMounted) return null;

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-2xl flex items-center justify-between px-3 py-2 rounded-full bg-[#0B0F1A]/90 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        
        {/* Logo Section */}
        <div className="flex items-center gap-1 pl-3">
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">
            <Terminal size={18} />
          </div>
          <span className="font-bold text-white text-lg tracking-tight">Raya Pratama</span>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-400">
          {['Home', 'About', 'Showcase', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              // Update activeMenu saat diklik
              onClick={() => setActiveMenu(item)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeMenu === item 
                  ? 'text-white bg-[#06B6D4]/20 shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
                  : 'hover:text-white hover:bg-white/5'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Tombol Mobile & Let's Talk */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex">
          <button className="flex items-center gap-1 px-6 py-2.5 rounded-full bg-linear-to-r from-blue-500 to-emerald-500 text-black text-sm font-bold hover:bg-[#047857] hover:shadow-[0_0_20px_rgba(5,150,105,0.6)] transition-all duration-300">
            <Zap size={14} fill="currentColor" />
            <a href="#contact" className="text-black">
              Let's Talk
            </a>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#0B0F1A]/95 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col gap-4 md:hidden shadow-2xl">
          {['Home', 'About', 'Showcase', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-lg font-medium border-b border-white/5 pb-2 ${activeMenu === item ? 'text-cyan-400' : 'text-gray-300'}`} 
              onClick={() => {
                setActiveMenu(item);
                setIsOpen(false);
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;