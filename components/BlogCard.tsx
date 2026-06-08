"use client";

import React from 'react';

// Menambahkan Interface agar lebih rapi dan aman
interface PostProps {
  post: {
    id: string;
    title: string;
    description: string;
    logo_url?: string;
    category: string;
    created_at: string;
  }
}

const BlogCard = ({ post }: PostProps) => {
  // Fungsi format tanggal yang lebih aman
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) 
      ? "N/A" 
      : date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="bg-[#0B0F1A]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
      
      {/* 1. Header: Gambar/Logo & Judul */}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-13 h-13 rounded-2xl border border-white/10 overflow-hidden shrink-0 bg-white/5 flex items-center justify-center">
          {/* Menggunakan image dengan fallback jika logo_url kosong */}
          <img 
            src={post.logo_url || '/placeholder-logo.png'} 
            alt={post.title} 
            className="w-full h-full object-cover p-2" 
            onError={(e) => { (e.target as HTMLImageElement).src = '/default-logo.png'; }}
          />
        </div>
        <h3 className="text-lg font-bold leading-tight line-clamp-2">{post.title}</h3>
      </div>

      {/* 2. Category */}
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-wider font-bold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
          {post.category || 'General'}
        </span>
      </div>

      {/* 3. Deskripsi - Menggunakan line-clamp untuk menjaga tinggi kartu tetap konsisten */}
      <p className="text-gray-400 text-sm mb-6 grow line-clamp-3">
        {post.description || "Deskripsi belum tersedia."}
      </p>

      {/* 4. Footer: Tanggal & Tombol */}
      <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
        <span>{formatDate(post.created_at)}</span>
        <a 
          href={`/blog/${post.id}`} 
          className="text-cyan-400 hover:text-white font-bold transition-colors flex items-center gap-1"
        >
          View More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;