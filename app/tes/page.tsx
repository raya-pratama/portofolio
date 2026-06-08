"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function testConnection() {
      // Kita coba ambil 1 data aja dari tabel posts
      const { data: posts, error } = await supabase
        .from('posts')
        .select('*')
        .limit(1);

      if (error) {
        setError(error);
        console.error("Gagal konek:", error);
      } else {
        setData(posts);
        console.log("Koneksi berhasil, data:", posts);
      }
    }
    testConnection();
  }, []);

  return (
    <div>
      {error ? <p>Error: {error.message}</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}