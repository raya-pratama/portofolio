"use client";
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  {
    title: "Crypto Trader Simulation",
    category: "Web Development",
    image: "/rypto.jpg",
    desc: "Platform simulasi trading cryptocurrency real-time yang dibangun dengan Next.js.",
    tags: ["Next.js", "API", "Trading"],
    link: "https://cryp-exc.vercel.app/",
    github: "#"
  },
  //  {
  //   title: "Crypto Trader Simulation",
  //   category: "Web Development",
  //   image: "/rypto.jpg",
  //   desc: "Platform simulasi trading cryptocurrency real-time yang dibangun dengan Next.js.",
  //   tags: ["Next.js", "API", "Trading"],
  //   link: "https://cryp-exc.vercel.app/",
  //   github: "#"
  // },
  //  {
  //   title: "Crypto Trader Simulation",
  //   category: "Web Development",
  //   image: "/rypto.jpg",
  //   desc: "Platform simulasi trading cryptocurrency real-time yang dibangun dengan Next.js.",
  //   tags: ["Next.js", "API", "Trading"],
  //   link: "https://cryp-exc.vercel.app/",
  //   github: "#"
  // }
];

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const timer = setTimeout(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-32 bg-[#111622] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#059669]/10 border border-[#059669]/20 text-[#059669] text-[10px] font-bold tracking-widest uppercase mb-4">
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              Featured <span className="text-[#059669]">Projects</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm leading-relaxed">
            Beberapa proyek terpilih yang menggabungkan keahlian networking dan pengembangan web modern.
          </p>
        </div>

        {/* WRAPPER DINAMIS: 
          - Jika proyek cuma 1, lebar dibatasi (max-w-md) agar tidak raksasa.
          - mx-auto memastikan posisi tetap di tengah.
        */}
        <div className={`mx-auto ${projects.length === 1 ? 'max-w-md' : projects.length === 2 ? 'max-w-4xl' : 'max-w-full'}`}>
          {isLoaded ? (
            <Swiper
              ref={swiperRef}
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true} 
              centeredSlidesBounds={true}
              pagination={{ 
                clickable: true,
                dynamicBullets: true
              }}
              autoplay={{ 
                delay: 5000,
                disableOnInteraction: false 
              }}
              breakpoints={{
                // Logika: Hanya tampilkan 3 kolom jika jumlah proyek minimal 3
                1024: { 
                  slidesPerView: projects.length >= 3 ? 3 : projects.length,
                  centeredSlides: projects.length < 3 
                },
              }}
              className="pb-20 project-swiper"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="group bg-[#0B0F1A] rounded-3xl overflow-hidden border border-white/5 hover:border-[#059669]/30 transition-all duration-500 h-full flex flex-col">
                    
                    {/* Image Container dengan Aspect Ratio Konsisten */}
                    <div className="relative aspect-video w-full overflow-hidden bg-[#161B22]">
                      <div className="absolute inset-0 bg-[#059669]/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#059669] transition-all"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                      
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 0}
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow text-left">
                      <span className="text-[#059669] text-[10px] font-bold uppercase tracking-[0.2em]">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2 mb-4 group-hover:text-[#059669] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                        {project.desc}
                      </p>
                      
                      {/* Tags */}
                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.tags.map((tag, tIndex) => (
                          <span key={tIndex} className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400 font-mono">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="h-[450px] w-full max-w-md mx-auto bg-[#0B0F1A] rounded-3xl animate-pulse" />
          )}
        </div>
      </div>

      <style jsx global>{`
        .project-swiper .swiper-pagination-bullet {
          background: #333 !important;
          opacity: 1;
        }
        .project-swiper .swiper-pagination-bullet-active {
          background: #00FF85 !important;
          box-shadow: 0 0 15px rgba(0, 255, 133, 0.4);
          width: 24px;
          border-radius: 4px;
          transition: all 0.3s;
        }
        .project-swiper {
          padding-bottom: 60px !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;