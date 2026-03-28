/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0B0F1A',     // Background Utama
        'dark-surface': '#161B22', // Card & Navbar
        'neon-green': '#00FF85',   // Aksen Utama (Networking vibe)
        'sky-blue': '#38BDF8',     // Aksen Sekunder
        'off-white': '#F0F9FF',    // Teks Utama
        // Di dalam extend: { colors: { ... } }
        'accent-orange': '#D97706', // Oranye gelap tapi hidup
        'accent-green': '#059669', // Hijau emerald yang solid
      },
    },
  },
  plugins: [],
};