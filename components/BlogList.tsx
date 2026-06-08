"use client";
import { useState } from 'react';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';

export default function BlogList({ posts }: { posts: any[] }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filtered = posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  const totalPages = Math.ceil(filtered.length / postsPerPage);
  const currentPosts = filtered.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <div>
      {/* Search & Tombol Kembali */}
      <div className="flex justify-between items-center mb-8">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 font-medium">← Kembali ke Home</Link>
        <input
          type="text"
          placeholder="Cari catatan..."
          className="bg-[#1e293b] border border-gray-700 p-2 rounded-lg text-white w-64"
          onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
        />
      </div>

      {/* Grid Kartu */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="px-4 py-2 bg-gray-800 rounded disabled:opacity-50"
          >Prev</button>
          <span>{currentPage} / {totalPages}</span>
          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-4 py-2 bg-gray-800 rounded disabled:opacity-50"
          >Next</button>
        </div>
      )}
    </div>
  );
}