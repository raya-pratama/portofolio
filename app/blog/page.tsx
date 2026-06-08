"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    // Gunakan flag untuk menghindari state update pada komponen yang sudah di-unmount
    let isMounted = true;

    async function fetchPosts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (isMounted) {
        if (error) {
          console.error("Error fetching:", error);
        } else {
          setPosts(data || []);
        }
        setLoading(false);
      }
    }

    fetchPosts();

    return () => { isMounted = false; };
  }, []);

  // Logika Filter: Cari + Kategori
  const filtered = posts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const displayedPosts = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // Ambil list kategori unik untuk dropdown
  const categories = ["Semua", ...Array.from(new Set(posts.map(p => p.category)))];

  return (
    <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden py-24">
      <div className="absolute inset-0 z-1">
        <div className="absolute top-0 right-0 w-125 h-125 bg-cyan-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-fuchsia-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(#828282 1px, transparent 1px), 
                            linear-gradient(90deg, #828282 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <section className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Link href="/" className="inline-block text-cyan-400 hover:text-white font-bold mb-4">← Kembali ke Home</Link>
          <h1 className="text-5xl font-black mb-4">Blog / <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-fuchsia-500">Technical Notes</span></h1>
          
          {/* Container Search & Filter (Flex-wrap agar responsif) */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <input 
              className="bg-[#0B0F1A] border border-white/10 p-3 rounded-xl w-full md:w-64 text-white focus:border-cyan-500 outline-none"
              placeholder="Cari catatan..." 
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            />
            <select 
              className="bg-[#0B0F1A] border border-white/10 p-3 rounded-xl w-full md:w-40 text-white focus:border-cyan-500 outline-none"
              onChange={(e) => { setSelectedCategory(e.target.value); setPage(1); }}
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500">Memuat catatan...(jika catatan tidak keluar mohon refresh)</div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.length > 0 ? (
                displayedPosts.map((post) => <BlogCard key={post.id} post={post} />)
              ) : (
                <div className="col-span-full text-center text-gray-500">Tidak ada catatan ditemukan.</div>
              )}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-6 mt-16 text-sm">
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="text-gray-400 hover:text-white disabled:opacity-30">Prev</button>
                <span className="text-gray-500">Halaman {page} dari {totalPages}</span>
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="text-gray-400 hover:text-white disabled:opacity-30">Next</button>
              </div>

            )}
          </>
        )}
      </section>
    </main>
  );
}