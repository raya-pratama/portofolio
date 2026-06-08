import { createBrowserClient } from '@supabase/ssr';

// Gunakan ini untuk semua komponen "use client" (seperti Login)
export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);