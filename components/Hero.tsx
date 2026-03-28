import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <>
      {/* HERO SECTION - Background paling gelap sebagai dasar */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0B0F1A]">
        
        {/* Efek Cahaya Halus (Aksen pemisah agar tidak menyatu) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#059669]/10 blur-[120px] rounded-full -z-10" />

        <div className="pt-20"> {/* Padding top agar tidak tertutup navbar */}
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            Raya <span className="text-[#059669] drop-shadow-[0_0_15px_rgba(5,150,105,0.3)]">Pratama</span>
          </h1>
          <p className="max-w-3xl text-gray-400 text-lg md:text-xl mb-12 mt-5 leading-relaxed">
            I’m highly passionate and always excited to learn more about networking, automation, and web development.
          </p>
          
          <a 
            href="#about" 
            className="group flex flex-col items-center gap-4 text-xs font-bold tracking-widest text-[#059669] uppercase transition"
          >
            Explore My Journey
            <div className="p-3 border border-[#059669]/30 rounded-full group-hover:bg-[#059669] group-hover:text-black transition-all duration-300 animate-bounce shadow-[0_0_15px_rgba(5,150,105,0.2)]">
              <ArrowDown size={20} />
            </div>
          </a>
        </div>
      </section>

      {/* ABOUT SECTION - Background sedikit lebih terang (Elevated) */}
      <section id="about" className="py-32 bg-[#111622] relative overflow-hidden">
        {/* Garis pemisah halus di atas */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#059669]/20 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Box Foto dengan Efek Border Glow */}
          <div className="relative group flex justify-center md:justify-start">
            {/* Glow Efek */}
            <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-[#059669] to-[#38BDF8] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-all duration-1000"></div>
            
            {/* Container Foto: W dan H harus SAMA (contoh: w-64 h-64) */}
            <div className="relative w-80 h-80 md:w-100 md:h-100 bg-[#161B22] rounded-full border border-white/5 flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Gunakan object-cover agar gambar tidak penyet */}
                <img 
                  src="/pp.jpg" 
                  alt="Raya Geandy Pratama" 
                  className="w-full h-full object-cover"
                />
                {/* Fallback jika gambar belum ada */}
                {/* <span className="text-gray-600 font-mono italic">Photo</span> */}
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#059669]/10 border border-[#059669]/20 text-[#059669] text-xs font-bold tracking-widest uppercase">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Building Networks, Crafting the Web <span className="text-[#059669]">and Automating Systems</span>.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I’m Raya Geandy Pratama, a vocational high school student focused on networking, web development, and automation, with hands-on experience using MikroTik, Cisco, and modern tools to build and manage efficient systems.
            </p>
            {/* <p className="text-gray-400 text-lg leading-relaxed">
              Selain fokus di infrastruktur, saya juga mengembangkan skill di **Web Development** untuk membangun alat-alat yang memudahkan manajemen sistem. Saya percaya teknologi terbaik adalah yang efisien dan mudah dikelola.
            </p> */}
            
           <div className="pt-4 flex gap-8">
              <div>
                <h4 className="text-[#059669] font-black text-2xl">11th</h4>
                <p className="text-gray-500 text-sm uppercase tracking-tighter">Grade Student</p>
              </div>
              <div className="w-[1px] bg-white/10" />
              <div>
                {/* <h4 className="text-[#059669] font-black text-2xl">UKL 1</h4>
                <p className="text-gray-500 text-sm uppercase tracking-tighter">Certified Task</p> */}
                <img src="/winbox-icon.svg" alt="Winbox" className='w-15 h-15'/>
              </div>
              <div>
                <img src="/github-color.svg" alt="Github" className='w-15 h-15 brightness-0 invert'/>
              </div>
              <div>
                <img src="/visual-studio.png" alt="Visual Studio" className='w-15 h-15'/>
              </div>
              <div>
                <img src="/virtualbox-color.svg" alt="VirtualBox" className='w-15 h-15'/>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;