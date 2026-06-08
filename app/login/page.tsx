"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert("Gagal Login: " + error.message);
        } else {
            await new Promise(resolve => setTimeout(resolve, 500));
            window.location.href = '/admin';
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#0f172a', // Biru gelap elegan
            fontFamily: 'sans-serif'
        }}>
            <form onSubmit={handleLogin} style={{
                backgroundColor: '#1e293b',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                width: '100%',
                maxWidth: '400px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                color: 'white'
            }}>
                <h1 style={{ textAlign: 'center', marginBottom: '10px', fontSize: '24px' }}>Login Admin</h1>

                <label style={{ fontSize: '14px', opacity: 0.8 }}>Email</label>
                <input
                    type="email"
                    placeholder="masukkan email anda"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: '12px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: 'white' }}
                />

                <label style={{ fontSize: '14px', opacity: 0.8 }}>Password</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '12px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: 'white' }}
                />

                <button type="submit" style={{
                    marginTop: '10px',
                    padding: '12px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background 0.3s'
                }}>
                    Masuk Sekarang
                </button>
            </form>
        </div>
    );
}