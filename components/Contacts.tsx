"use client";

import React, { useState } from 'react';
import { Send } from 'lucide-react';
// Import dari react-icons
import { FaInstagram, FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setStatus("Pesan terkirim! Terima kasih.");
      event.target.reset(); // Mengosongkan form setelah sukses
    } else {
      setStatus("Terjadi kesalahan, coba lagi.");
    }
  };
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto bg-[#0B0F1A]/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
        <h2 className="text-3xl font-black mb-2 text-cyan-400">Contact Me</h2>
        <p className="text-gray-400 mb-10">Got a question? Send me a message and I'll reply as soon as possible.</p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Form Kiri */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Send a message</h3>
            <div className="space-y-4">
              <form onSubmit={handleSubmit} method="POST" className="space-y-4">
                {/* Masukkan Access Key Anda */}
                <input type="hidden" name="access_key" value="31271182-42cd-41e6-aef1-f16384c34b93" />

                <input type="text" name="name" placeholder="Nama Anda" required className="w-full bg-[#050505] p-4 rounded-xl border border-white/10 outline-none focus:border-cyan-500 transition-all" />
                <input type="email" name="email" placeholder="Email Anda" required className="w-full bg-[#050505] p-4 rounded-xl border border-white/10 outline-none focus:border-cyan-500 transition-all" />
                <textarea name="message" placeholder="Pesan Anda" rows={4} required className="w-full bg-[#050505] p-4 rounded-xl border border-white/10 outline-none focus:border-cyan-500 transition-all" />

                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 p-4 rounded-xl font-bold transition-all text-white">
                  <Send size={18} /> Send message
                </button>
                {status && <p className="text-white mt-4">{status}</p>}
              </form>
            </div>
          </div>

          {/* Social Links Kanan */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Connect With Me</h3>
            <div className="grid grid-cols-1 gap-4">
              <a href="https://www.instagram.com/raya.pratamaa?igsh=enBkcmljamQwanFm" target="_blank"
                rel="noopener noreferrer" className="flex items-center gap-4 bg-[#050505] p-4 rounded-xl border border-white/10 hover:border-pink-500/50 transition-all">
                <FaInstagram size={24} className="text-pink-500" />
                <div>
                  <div className="font-bold">Instagram</div>
                  <div className="text-xs text-gray-500">@raya.pratamaa</div>
                </div>
              </a>
              <a href="https://github.com/raya-pratama" target="_blank"
                rel="noopener noreferrer" className="flex items-center gap-4 bg-[#050505] p-4 rounded-xl border border-white/10 hover:border-gray-500/50 transition-all">
                <FaGithub size={24} className="text-white" />
                <div>
                  <div className="font-bold">GitHub</div>
                  <div className="text-xs text-gray-500">@raya-pratama</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/raya-pratama-00a019382" target="_blank"
                rel="noopener noreferrer" className="flex items-center gap-4 bg-[#050505] p-4 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all">
                <FaLinkedin size={24} className="text-blue-500" />
                <div>
                  <div className="font-bold">LinkedIn</div>
                  <div className="text-xs text-gray-500">raya-pratama</div>
                </div>
              </a>
              <a href="https://www.tiktok.com/@rayaa_pratama" target="_blank"
                rel="noopener noreferrer" className="flex items-center gap-4 bg-[#050505] p-4 rounded-xl border border-white/10 hover:border-black/50 transition-all">
                <FaTiktok size={24} className="text-white" />
                <div>
                  <div className="font-bold">TikTok</div>
                  <div className="text-xs text-gray-500">@rayaa_pratama</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;