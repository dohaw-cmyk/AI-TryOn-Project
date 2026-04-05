"use client";

import "./globals.css";  // <-- 이 한 줄을 반드시 맨 위에 넣어야 합니다!
"use client";

import React from 'react';
// ... 나머지 코드 ...


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <nav className="flex justify-between items-center px-10 py-8 border-b border-gray-50">
        <h1 className="text-3xl font-black tracking-tighter italic">AI-TRYON</h1>
        <div className="flex gap-6 text-sm font-bold">
          <button onClick={() => window.location.href='/login'} className="hover:underline">LOGIN</button>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <span className="text-[10px] font-bold tracking-[0.6em] text-gray-400 mb-6">NEXT GENERATION FASHION</span>
        <h2 className="text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85]">
          VIRTUAL<br/>FITTING
        </h2>
        <p className="max-w-xl text-lg text-gray-400 mb-14 font-medium leading-relaxed">
          AI가 제안하는 당신의 새로운 스타일.<br/>
          지금 바로 가상 피팅을 체험해보세요.
        </p>

        <button 
          className="w-full max-w-xs py-5 bg-black text-white text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-2xl"
        >
          GET STARTED
        </button>
      </main>

      <footer className="py-20 text-center text-[10px] text-gray-300 tracking-[0.8em]">
        © 2026 AI-TRYON STUDIOS.
      </footer>
    </div>
  );
}
