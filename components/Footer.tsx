import React from 'react';
import { Mail, MapPin, Briefcase } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    // Kita gunakan bg-[#050505] yang solid untuk menimpa grid di belakangnya
    <footer className="relative z-50 bg-[#050505] border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Kolom 1: Branding - Dibuat lebih elegan */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight text-white">
            Raya<span className="text-cyan-400">Pratama</span>
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Building websites and applications that actually work well for real people.
          </p>
          <div className="flex flex-col gap-3 text-sm text-gray-400">
            <span className="flex items-center gap-2">✦ Web Development</span>
            <span className="flex items-center gap-2">✦ AI Automation</span>
            <span className="flex items-center gap-2">✦ ML Engineering</span>
          </div>
        </div>

        {/* Kolom 2: Quick Links - Dibuat lebih clean */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold text-white uppercase tracking-widest">Quick Links</h4>
          <nav className="flex flex-col gap-3 text-sm text-gray-500">
            {['Home', 'About', 'Showcase', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Kolom 3: Get in Touch - Visual yang lebih menonjol */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold text-white uppercase tracking-widest">Get in Touch</h4>
          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/5"><Mail size={16} className="text-cyan-400" /></div>
              gpraya257@gmail.com
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/5"><MapPin size={16} className="text-cyan-400" /></div>
              Sidoarjo, East Java
            </div>
          </div>
          
          <div className="flex gap-3 pt-2">
            {[FaGithub, FaLinkedin, FaInstagram, FaTwitter].map((Icon, i) => (
              <a key={i} href="#" className="p-3 rounded-xl bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
        <p>© 2026 Raya Pratama. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Engineered with precision</p>
      </div>
    </footer>
  );
};

export default Footer;