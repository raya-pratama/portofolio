import { 
  Terminal, 
  Globe, 
  Code, 
  Settings, 
  Server, 
  Database, 
  Binary, 
  ShieldCheck 
} from 'lucide-react';
import Image from 'next/image';

const skills = [
  { name: "MikroTik", logo: "/mikrotik.svg", progress: "90%" },
  { name: "Cisco Networking", logo: "/cisco.svg", progress: "85%" },
  { name: "Web Development", logo: "/codecrafters.svg", progress: "80%" },
  { name: "Automation", logo: "/ansible.svg", progress: "75%" },
  { name: "Linux Admin", logo: "/linux.svg", progress: "88%" },
  { name: "MySQL Database", logo: "/mysql.svg", progress: "82%" },
  { name: "Python", logo: "/python.svg", progress: "70%" },
  { name: "Network Security", logo: "/kalilinux.svg", progress: "80%" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0B0F1A]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-widest uppercse">
            My <span className="text-[#059669]">Skills</span>
          </h2>
          <div className="flex justify-center gap-1">
            <div className="w-12 h-1 bg-[#059669]"></div>
            <div className="w-4 h-1 bg-[#059669]/30"></div>
          </div>
        </div>

        {/* Grid Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-[#111622] rounded-3xl border border-white/5 flex flex-col items-center text-center hover:border-[#059669]/50 transition-all duration-500 overflow-hidden"
            >
              {/* Logo di Tengah Atas */}
              <div className="w-20 h-20 bg-[#111622] flex items-center justify-center p-2 mb-6 group-hover:scale-110 transition-all duration-500 shadow-inner overflow-hidden border border-white/1 relative">
            {/* Menggunakan object-cover agar gambar penuh mengikuti lingkaran/kotak tanpa gepeng */}
            <Image
            src={skill.logo}
            alt={`${skill.name} Logo`}
            fill // Mengisi penuh container
            className="w-full h-full object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-500" //object-contain agar logo yang panjang terlihat penuh, p-1 agar ada padding
            />
            </div>

              {/* Nama Skill */}
              <h3 className="text-white font-bold text-sm md:text-base mb-1 tracking-wide uppercase">
                {skill.name}
              </h3>

              {/* UI Persentase (Bar Hijau Neon) */}
              <div className="w-full space-y-2">
                <div className="flex justify-between items-center px-1">
                  {/* <span className="text-[10px] text-gray-500 font-mono italic">Efficiency</span> */}
                  <span className="text-[12px] text-[#059669] font-black">{skill.progress}</span>
                </div>
                {/* Bar Background */}
                <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
                  {/* Bar Foreground (Glow Neon) */}
                  <div 
                    className="h-full bg-[#00FF85] rounded-full shadow-[0_0_10px_#00FF85]" 
                    style={{ width: skill.progress }}
                  ></div>
                </div>
              </div>

              {/* Efek Garis Glow di bawah Card (Opsional) */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#059669] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;