"use client";

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-32 md:pt-0">
      
      {/* Background Grid */}
      {/* <div
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#828282 1px, transparent 1px), 
                            linear-gradient(90deg, #828282 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
       <div className="absolute inset-0 z-0 bg-linear-to-r from-fuchsia-600/15 via-transparent to-cyan-500/20" /> */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center z-10 flex-col-reverse md:flex-row">
        

        {/* Bagian Teks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          {/* Ukuran teks disesuaikan agar tidak berantakan di HP */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
          STUDENT
        </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-blue-500">Raya</span> Pratama
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-medium">
            Ai Automation & Network Engineer
          </p>

          {/* Ikon Tech - Gunakan flex-wrap agar tidak menumpuk saat layar sempit */}
          <div className="pt-2 flex flex-wrap gap-4 md:gap-8 items-center">
            <div>
              <h4 className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-blue-500 font-black text-xl md:text-2xl">11th</h4>
              <p className="text-gray-500 text-[10px] md:text-sm uppercase tracking-tighter">Grade Student</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex gap-4">
              <img src="/winbox-icon.svg" alt="Winbox" className='w-10 h-10 md:w-15 md:h-15' />
              <img src="/github-color.svg" alt="Github" className='w-10 h-10 md:w-15 md:h-15 brightness-0 invert' />
              <img src="/visual-studio.png" alt="Visual Studio" className='w-10 h-10 md:w-15 md:h-15' />
              <img src="/virtualbox-color.svg" alt="VirtualBox" className='w-10 h-10 md:w-15 md:h-15' />
            </div>
          </div>
        </motion.div>

        {/* Bagian Foto */}
        <div className="relative flex justify-center md:justify-end">
          {/* Ukuran foto sedikit dikurangi untuk mobile */}
          <div className="relative rotate-2 w-64 h-72 md:w-87.5 md:h-100">
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500 to-blue-600 rotate-2 rounded-4xl blur opacity-20"></div>
            <motion.img
              src="/pp.jpg"
              alt="Profile"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full object-cover rounded-4xl grayscale hover:grayscale-0 border border-white/10 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;