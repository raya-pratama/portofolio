import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-6 w-full z-50 px-4 flex justify-center">
      <nav className="
        w-full max-w-5xl 
        bg-white/90 backdrop-blur-xl 
        rounded-full px-6 py-2.5 
        flex justify-between items-center
        border border-white
        shadow-[0_0_25px_rgba(255,255,255,0.4)] 
        transition-all duration-500
      ">
      
        <div className="flex items-center gap-3">
          <div className="
            w-10 h-10 rounded-full 
            bg-[#059669] 
            flex items-center justify-center 
            text-black font-black text-sm
            shadow-[0_0_10px_rgba(5,150,105,0.3)]
          ">
            RY
          </div>
          <span className="font-bold tracking-tighter text-black hidden sm:block">
            RAYA<span className="text-[#059669]"></span>
          </span>
        </div>

    
        <div className="flex gap-6 md:gap-10 text-xs md:text-sm font-bold text-gray-800">
          <a href="#home" className="hover:text-[#059669] transition">Home</a>
          <a href="#about" className="hover:text-[#059669] transition">About</a>
          <a href="#skills" className="hover:text-[#059669] transition">Skills</a>
          <a href="#projects" className="hover:text-[#059669] transition">Projects</a>
        </div>

      
        <div className="">
          <a href="#footer" className="
            px-6 py-2 
            bg-[#059669] 
            text-black rounded-full 
            text-xs font-bold 
            hover:bg-[#047857] 
            transition-all 
            shadow-[0_0_15px_rgba(5,150,105,0.4)]
          ">
            let's talk
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;