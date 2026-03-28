import Link from 'next/link';
import { Mail, Phone } from 'lucide-react'; // Hanya ambil icon umum yang aman

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0B0F1A] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* BAGIAN KIRI: IDENTITAS */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00FF85] flex items-center justify-center text-[#0B0F1A] font-black text-sm shadow-[0_0_15px_rgba(0,255,133,0.3)]">
                RY
              </div>
              <span className="text-white font-black tracking-tighter text-xl uppercase">Raya</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Siswa SMK yang fokus pada eksplorasi jaringan dan pengembangan web modern. Berdedikasi untuk membangun infrastruktur digital yang efisien.
            </p>
          </div>

          {/* BAGIAN TENGAH: NAVIGASI */}
          <div className="md:justify-self-center">
            <h4 className="text-white font-bold mb-6 uppercase text-[10px] tracking-[0.2em] opacity-50">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-[#00FF85] text-sm transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BAGIAN KANAN: CONTACT (PENGGANTI LOGO ERROR) */}
          <div className="md:justify-self-end w-full md:w-auto">
            <h4 className="text-white font-bold mb-6 uppercase text-[10px] tracking-[0.2em] opacity-50">Contact</h4>
            <ul className="space-y-4">
              {/* EMAIL & PHONE TETAP PAKAI LUCIDE (KARENA ADA) */}
              <li>
                <a href="mailto:gpraya257@gmail.com" className="group flex items-center gap-3 text-gray-400 hover:text-[#00FF85] transition-colors">
                  <Mail size={16} />
                  <span className="text-sm">gpraya257@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+6285792108262" className="group flex items-center gap-3 text-gray-400 hover:text-[#00FF85] transition-colors">
                  <Phone size={16} />
                  <span className="text-sm">+62 857-921-082-62</span>
                </a>
              </li>
              
              {/* INSTAGRAM - PAKAI SVG */}
              <li>
                <a href="https://www.instagram.com/raya.pratamaa?igsh=enBkcmljamQwanFm" className="group flex items-center gap-3 text-gray-400 hover:text-[#00FF85] transition-colors">
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.079-1.338 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.582.016 4.85.074 1.17.054 1.802.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.427.359 1.059.415 2.23.058 1.266.074 1.645.074 4.849s-.016 3.582-.074 4.85c-.056 1.17-.251 1.802-.415 2.227a3.94 3.94 0 01-.896 1.382 3.94 3.94 0 01-1.382.896c-.427.164-1.059.359-2.23.415-1.266.058-1.645.074-4.849.074s-3.582-.016-4.85-.074c-1.17-.054-1.802-.249-2.227-.415a3.845 3.845 0 01-1.382-.896 3.845 3.845 0 01-.896-1.382c-.164-.427-.359-1.059-.415-2.23C2.176 15.582 2.16 15.203 2.16 12s.016-3.582.074-4.85c.054-1.17.249-1.802.415-2.227a3.94 3.94 0 01.896-1.382 3.94 3.94 0 011.382-.896c.427-.164 1.059-.359 2.23-.415 1.266-.058 1.645-.074 4.849-.074zm0 3.672a6.168 6.168 0 100 12.336 6.168 6.168 0 000-12.336zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                  </svg>
                  <span className="text-sm">@raya.pratamaa</span>
                </a>
              </li>

              {/* GITHUB - PAKAI SVG */}
              <li>
                <a href="https://github.com/raya-pratama" className="group flex items-center gap-3 text-gray-400 hover:text-[#00FF85] transition-colors">
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  <span className="text-sm">raya-pratama</span>
                </a>
              </li>

              {/* LINKEDIN - PAKAI SVG */}
              <li>
                <a href="https://www.linkedin.com/in/raya-pratama-00a019382?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="group flex items-center gap-3 text-gray-400 hover:text-[#00FF85] transition-colors">
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                  </svg>
                  <span className="text-sm">Raya-Pratama</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        {/* <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.3em]">
            © 2026 Raya Geandy Pratama
          </p>
          <div className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.3em]">
            Networking <span className="text-[#00FF85]">X</span> Web Dev
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;