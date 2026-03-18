import { supabase } from '@/lib/supabase';

export default async function Home() {
  // Mengambil data projects secara dinamis
  const { data: projects } = await supabase.from('projects').select('*');

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 border-b border-slate-800 pb-4">
        Portofolio Saya
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <div key={project.id} className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-blue-500 transition-all">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-slate-400 text-sm mb-4">{project.description}</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded">Next.js</span>
              <span className="px-2 py-1 bg-emerald-600/20 text-emerald-400 text-xs rounded">Supabase</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}