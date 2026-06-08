"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter, useParams } from 'next/navigation';

export default function EditBlog() {
    const { id } = useParams();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState({ title: '', category: '', description: '', logo_url: '' });
    const [contentBlocks, setContentBlocks] = useState<any[]>([]);

    const LOGO_MAP: { [key: string]: string } = {
        "Cisco": "/logos/cisco.svg",
        "Mikrotik": "/logos/mikrotik.svg",
        "Network": "/logos/network.svg",
        "Linux": "/logos/debian.svg",
    };

    useEffect(() => {
        if (id) fetchPost();
    }, [id]);

    async function fetchPost() {
        const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();
        if (!error) {
            setBlog({ title: data.title, category: data.category, description: data.description, logo_url: data.logo_url });
            setContentBlocks(data.content || []);
        }
        setLoading(false);
    }

    // FUNGSI BARU: Tambah & Hapus Blok
    const addBlock = (type: string) => setContentBlocks([...contentBlocks, { type, value: '' }]);
    const removeBlock = (index: number) => setContentBlocks(contentBlocks.filter((_, i) => i !== index));
    const updateBlock = (index: number, value: string) => {
        const b = [...contentBlocks];
        b[index].value = value;
        setContentBlocks(b);
    };

    const handleImageChange = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Upload gambar baru
        const { data, error } = await supabase.storage.from('blog-imagess').upload(`${Date.now()}_${file.name}`, file);
        if (!error) {
            const { data: urlData } = supabase.storage.from('blog-imagess').getPublicUrl(data.path);
            updateBlock(index, urlData.publicUrl);
        } else {
            alert("Gagal upload gambar");
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center text-white">Memuat...</div>;

    return (
        <div className="min-h-screen p-6 md:p-10 font-sans">
            <div className="max-w-3xl mx-auto bg-[#0B0F1A]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black mb-8 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                    Edit Artikel
                </h2>

                {/* Form Utama */}
                <div className="space-y-6 mb-10">
                    <input className="w-full bg-[#050505] p-4 rounded-2xl border border-white/10" value={blog.title} onChange={e => setBlog({ ...blog, title: e.target.value })} />
                    <select className="w-full bg-[#050505] p-4 rounded-2xl border border-white/10 text-white" value={blog.category} onChange={e => setBlog({ ...blog, category: e.target.value, logo_url: LOGO_MAP[e.target.value] || "/logos/default.svg" })}>
                        {Object.keys(LOGO_MAP).map(kat => <option key={kat} value={kat}>{kat}</option>)}
                    </select>
                    <textarea className="w-full bg-[#050505] p-4 rounded-2xl border border-white/10 h-24" value={blog.description} onChange={e => setBlog({ ...blog, description: e.target.value })} />
                </div>

                {/* Bagian Edit Konten */}
                <div className="space-y-6 mb-10">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Isi Konten</h3>
                    {contentBlocks.map((block, i) => (
                        <div key={i} className="bg-[#050505]/50 p-6 rounded-2xl border border-white/5 relative group">
                            <button onClick={() => removeBlock(i)} className="absolute top-4 right-4 text-red-500/50 hover:text-red-500 text-xs">Hapus</button>
                            <p className="text-cyan-500/50 text-[10px] uppercase font-bold mb-3">{block.type}</p>
                            {block.type === 'text' ? (
                                <textarea className="w-full bg-transparent outline-none text-sm" value={block.value} onChange={(e) => updateBlock(i, e.target.value)} />
                            ) : (
                                <div className="space-y-3">
                                    {block.value && <img src={block.value} className="w-full h-40 object-cover rounded-xl border border-white/10" />}
                                    <input type="file" accept="image/*" className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-white/10 file:text-white hover:file:bg-white/20 transition-all" onChange={(e) => handleImageChange(i, e)} />
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Tombol Tambah Blok */}
                    <div className="flex gap-4">
                        <button onClick={() => addBlock('text')} className="flex-1 bg-white/5 hover:bg-white/10 py-3 rounded-xl text-sm transition-all border border-white/5"> + Teks</button>
                        <button onClick={() => addBlock('image')} className="flex-1 bg-white/5 hover:bg-white/10 py-3 rounded-xl text-sm transition-all border border-white/5"> + Gambar</button>
                    </div>
                </div>

                <button onClick={async () => {
                    await supabase.from('posts').update({ ...blog, content: contentBlocks }).eq('id', id);
                    alert("Berhasil diupdate!");
                    router.push('/admin');
                }} className="w-full bg-linear-to-r from-cyan-600 to-blue-600 p-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg shadow-cyan-900/20">
                    Simpan Perubahan
                </button>
            </div>
        </div>
    );
}