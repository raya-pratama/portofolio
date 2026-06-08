import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClientForAuth() { // 1. Tambahkan async di sini
  const cookieStore = await cookies() // 2. Tambahkan await di sini

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options }) // Sekarang sudah aman
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options }) // Sekarang sudah aman
        },
      },
    }
  )
}