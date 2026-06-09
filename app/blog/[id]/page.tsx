"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link'; // Tambahkan ini di atas

export default function ViewBlog() {
    const { id } = useParams();
    const [post, setPost] = useState<any>(null);

    useEffect(() => {
        if (id) {
            supabase.from('posts').select('*').eq('id', id).single()
                .then(({ data }) => setPost(data));
        }
    }, [id]);

    if (!post) return <div className="min-h-screen flex items-center justify-center text-white">Memuat...</div>;

    return (
        // Wrapper utama dengan background gradasi grid
        <div className="min-h-screen p-4 md:p-10 font-sans">

            {/* CARD BESAR (Glassmorphism & Gradasi) */}
            <article className="max-w-4xl mx-auto bg-[#0B0F1A]/90 backdrop-blur-xl border border-white/10 rounded-4xl p-6 md:p-12 shadow-2xl">

            <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors mb-6 font-bold"
            >
                ← Kembali ke Blog
            </Link>
                {/* Header: Logo, Judul, Kategori */}
                <div className="flex flex-col md:flex-row gap-6 mb-10 items-start">
                    <img src={post.logo_url} alt="Logo" className="w-30 h-30 rounded-2xl border border-white/10 p-2 bg-white/5" />
                    <div>
                        <span className="inline-block px-4 py-1 rounded-full bg-cyan-900/40 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-widest mb-2">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black text-white">{post.title}</h1>
                        <p className="text-gray-400 mt-3 text-lg">{post.description}</p>
                    </div>
                </div>

                <hr className="border-white/10 mb-10" />

                {/* Konten Artikel */}
                <div className="space-y-8">
                    {post.content && post.content.map((block: any, i: number) => (
                        <div key={i}>
                            {block.type === 'text' ? (
                                <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">{block.value}</p>
                            ) : (
                                /* Pastikan block.value berisi URL yang benar */
                                block.value ? (
                                    <img
                                        src={block.value}
                                        className="w-full rounded-3xl border border-white/10 shadow-lg object-cover"
                                        alt={`Content ${i}`}
                                        loading="lazy"
                                        onError={(e) => {
                                            console.error("Gagal load gambar:", block.value);
                                            e.currentTarget.src = "/fallback-image.png"; // Ganti dengan gambar error lokal jika perlu
                                        }}
                                    />
                                ) : (
                                    <div className="p-10 border border-dashed border-gray-700 text-gray-600 text-center rounded-2xl">
                                        Gambar tidak ditemukan
                                    </div>
                                )
                            )}
                        </div>
                    ))}
                </div>

            </article>
        </div>
    );
}