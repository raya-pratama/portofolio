"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';



export default function CreateBlog() {
    const router = useRouter();
    const [blog, setBlog] = useState({ title: '', category: '', description: '', logo_url: '' });
    const [contentBlocks, setContentBlocks] = useState<{ type: string, value: string }[]>([]);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) router.push('/login');
        };
        checkUser();
    }, [router]);

    const LOGO_MAP: { [key: string]: string } = {
        "Cisco": "/logos/cisco.svg",
        "Mikrotik": "/logos/mikrotik.svg",
        "Network": "/logos/network.svg",
        "Linux": "/logos/debian.svg",
    };

    const addBlock = (type: string) => setContentBlocks([...contentBlocks, { type, value: '' }]);
    const removeBlock = (index: number) => setContentBlocks(contentBlocks.filter((_, i) => i !== index));

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const { data, error } = await supabase.storage
            .from('blog-imagess')
            .upload(`${Date.now()}_${file.name}`, file);

        if (error) {
            console.error("Detail Error Upload:", error);
            alert("Upload gagal!");
            return;
        }

        const { data: urlData } = supabase.storage
            .from('blog-imagess')
            .getPublicUrl(data.path);

        const b = [...contentBlocks];
        b[index].value = urlData.publicUrl;
        setContentBlocks(b);
    };

    const saveBlog = async () => {
        if (!blog.title) return alert("Judul wajib diisi!");

        const { error } = await supabase.from('posts').insert([{
            ...blog,
            content: contentBlocks
        }]);

        if (error) {
            alert("Gagal menyimpan: " + error.message);
        } else {
            alert("Blog berhasil disimpan!");
            router.push('/admin');
        }
    };

    return (
        <div className="min-h-screen p-6 md:p-10">
            <div className="max-w-3xl mx-auto bg-[#0B0F1A]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black mb-8 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                    Buat Artikel Baru
                </h2>

                <div className="space-y-6 mb-8">
                    <input
                        className="w-full bg-[#050505] p-4 rounded-2xl border border-white/10 focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-600"
                        placeholder="Judul Artikel"
                        onChange={e => setBlog({ ...blog, title: e.target.value })}
                    />

                    <select
                        className="w-full bg-[#050505] p-4 rounded-2xl border border-white/10 text-white focus:border-cyan-500/50 outline-none transition-all"
                        value={blog.category}
                        onChange={e => {
                            const selectedCategory = e.target.value;
                            setBlog({ ...blog, category: selectedCategory, logo_url: LOGO_MAP[selectedCategory] || "/logos/default.png" });
                        }}
                    >
                        <option value="" disabled>Pilih Kategori</option>
                        {Object.keys(LOGO_MAP).map(kat => <option key={kat} value={kat}>{kat}</option>)}
                    </select>

                    <textarea
                        className="w-full bg-[#050505] p-4 rounded-2xl border border-white/10 focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-600 h-24"
                        placeholder="Deskripsi Singkat"
                        onChange={e => setBlog({ ...blog, description: e.target.value })}
                    />
                </div>

                <div className="space-y-4 mb-8">
                    {contentBlocks.map((block, i) => (
                        <div key={i} className="bg-[#050505]/50 p-5 rounded-2xl border border-white/5 relative group hover:border-cyan-500/30 transition-all">
                            <button onClick={() => removeBlock(i)} className="text-red-500/50 hover:text-red-500 text-xs absolute right-5 top-5 transition-colors">Hapus</button>
                            <p className="text-cyan-500/70 text-[10px] uppercase font-bold tracking-widest mb-3">{block.type}</p>

                            {block.type === 'text' ? (
                                <textarea
                                    className="w-full bg-transparent text-sm outline-none resize-none"
                                    placeholder="Isi teks..."
                                    value={block.value}
                                    onChange={e => {
                                        const b = [...contentBlocks];
                                        b[i].value = e.target.value;
                                        setContentBlocks(b);
                                    }}
                                />
                            ) : (
                                <div className="space-y-3">
                                    {block.value && <img src={block.value} className="w-full h-40 object-cover rounded-xl" alt="Preview" />}
                                    <input type="file" accept="image/*" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-white/10 file:text-white hover:file:bg-white/20 transition-all" onChange={(e) => handleUpload(e, i)} />
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="flex gap-4">
                        <button onClick={() => addBlock('text')} className="flex-1 bg-white/5 hover:bg-white/10 py-3 rounded-xl text-sm transition-all border border-white/5"> + Teks</button>
                        <button onClick={() => addBlock('image')} className="flex-1 bg-white/5 hover:bg-white/10 py-3 rounded-xl text-sm transition-all border border-white/5"> + Gambar</button>
                    </div>
                </div>

                <button onClick={saveBlog} className="w-full bg-linear-to-r from-cyan-600 to-blue-600 p-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg shadow-cyan-900/20">
                    Simpan Artikel
                </button>
            </div>
        </div>
    );
}