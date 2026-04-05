"use client";

import React from 'react';

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* 상단바 */}
      <nav className="flex justify-between items-center px-10 py-8 border-b border-gray-50">
        <h1 className="text-3xl font-black tracking-tighter">AI-TRYON</h1>
        <div className="flex gap-6 text-sm font-bold">
          <button onClick={() => window.location.href='/login'} className="bg-black text-white px-6 py-2">LOGIN</button>
        </div>
      </nav>

      {/* 메인 섹션 */}
      <main className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <h2 className="text-7xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          VIRTUAL<br/>FITTING
        </h2>
        <p className="max-w-xl text-lg text-gray-400 mb-12 font-medium leading-relaxed">
          AI가 제안하는 당신의 새로운 스타일.<br/>
          지금 바로 가상 피팅을 체험해보세요.
        </p>

        <button 
          onClick={() => alert("서비스 준비 중입니다!")}
          className="w-full max-w-xs py-5 bg-black text-white text-xl font-bold hover:bg-gray-800 transition-all shadow-2xl"
        >
          GET STARTED
        </button>
      </main>

      <footer className="py-20 text-center text-[10px] text-gray-300 tracking-[0.5em]">
        © 2026 AI-TRYON STUDIOS.
      </footer>
    </div>
  );
}
