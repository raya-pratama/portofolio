"use client";
import { useState } from 'react';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';

export default function BlogGrid({ posts }: { posts: any[] }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const filtered = posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const displayedPosts = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <>
      {/* Tombol Kembali & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
        <Link href="/" className="text-cyan-400 hover:text-white font-bold transition-all">← Kembali ke Home</Link>
        <input 
          className="bg-[#0B0F1A] border border-white/10 p-3 rounded-xl w-full md:w-64 text-white focus:border-cyan-500 outline-none"
          placeholder="Cari catatan..." 
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
        />
      </div>

      {/* Grid Kartu */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPosts.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-6 mt-16 text-sm">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="text-gray-400 hover:text-white disabled:opacity-30">Prev</button>
          <span className="text-gray-500">Halaman {page} dari {totalPages}</span>
          <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="text-gray-400 hover:text-white disabled:opacity-30">Next</button>
        </div>
      )}
    </>
  );
}