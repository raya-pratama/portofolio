const skills = ["MikroTik", "Cisco", "Linux", "Next.js", "Tailwind", "Docker", "Python", "SQL"];

const MainContent = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* SKILLS */}
      <section id="skills" className="py-24">
        <h2 className="text-2xl font-bold text-center mb-12">Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-dark-surface p-6 rounded-xl border border-white/5 flex flex-col items-center hover:border-neon-green/50 transition cursor-default">
              <div className="w-10 h-10 bg-dark-bg rounded mb-3"></div> {/* Placeholder Logo */}
              <span className="text-sm font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 border-t border-white/5">
        <h2 className="text-2xl font-bold mb-12 text-neon-green">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="group overflow-hidden rounded-2xl bg-dark-surface border border-white/5">
              <div className="h-48 bg-gray-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Name {i}</h3>
                <p className="text-gray-400 text-sm mb-4">Deskripsi singkat project yang kamu bangun di Vercel.</p>
                <div className="flex gap-2 text-[10px] font-mono text-neon-green">
                  <span>#NEXTJS</span> <span>#NETWORKING</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;