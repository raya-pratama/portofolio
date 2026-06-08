"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function AdminDashboard() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => { fetchPosts(); }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        window.location.href = '/login'; // Tendang ke login kalau gak ada sesi
      } else {
        setLoading(false);
      }
    }
    checkUser();
  }, []);

  if (loading) return <div>Loading...</div>;
  
  async function fetchPosts() {
    const { data } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
    setPosts(data || []);
  }

  async function deletePost(id: string, content: any[]) {
    if (!confirm("Yakin ingin menghapus blog ini beserta semua gambarnya?")) return;

    // 1. Logika Hapus Gambar di Bucket
    if (content && Array.isArray(content)) {
      for (const block of content) {
        if (block.type === 'image' && block.value) {
          // Mengambil nama file dari URL (contoh: .../12345_gambar.png -> 12345_gambar.png)
          const fileName = block.value.split('/').pop();
          if (fileName) {
            await supabase.storage.from('blog-imagess').remove([fileName]);
          }
        }
      }
    }

    // 2. Hapus data dari database
    const { error } = await supabase.from('posts').delete().eq('id', id);

    if (error) {
      alert("Gagal menghapus data: " + error.message);
    } else {
      fetchPosts(); // Refresh list setelah hapus
    }
  }

  return (
    <div className="min-h-screen p-10 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-blue-500">
              Admin Dashboard
            </h1>
            <p className="text-gray-400 mt-2">Kelola konten blog Anda dengan mudah.</p>
          </div>
          <Link href="/admin/create" className="bg-blue-600 px-8 py-3 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
            + Tambah Blog
          </Link>
        </div>

        <div className="bg-[#0B0F1A]/80 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <table className="w-full text-left">
            <thead className="border-b border-white/10 bg-white/5">
              <tr>
                <th className="p-6 text-xs uppercase tracking-widest text-gray-400">Judul Artikel</th>
                <th className="p-6 text-xs uppercase tracking-widest text-gray-400">Kategori</th>
                <th className="p-6 text-xs uppercase tracking-widest text-gray-400 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 font-bold text-white">{post.title}</td>
                  <td className="p-6">
                    <span className="px-3 py-1 rounded-full bg-blue-900/40 text-blue-300 border border-blue-500/30 text-xs font-medium">
                      {post.category}
                    </span>
                  </td>
                  <td className="p-6 flex justify-end gap-3">
                    <Link
                      href={`/admin/edit/${post.id}`}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-all"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deletePost(post.id, post.content)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm transition-all"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}