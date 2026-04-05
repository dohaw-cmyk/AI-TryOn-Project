"use client";

import React from 'react';

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f4f6] p-4">
      {/* 쇼핑몰 로그인 카드 */}
      <div className="w-full max-w-[450px] bg-white p-10 md:p-14 shadow-sm border border-gray-100 flex flex-col items-center">
        
        {/* 브랜드 로고 */}
        <h1 className="text-4xl font-serif font-black mb-1 tracking-[0.2em] text-black">
          AI-TRYON
        </h1>
        <p className="text-[10px] text-gray-400 mb-12 tracking-widest font-light">VIRTUAL FITTING SOLUTION</p>
        
        {/* 입력창 세트 */}
        <div className="w-full space-y-3 mb-6">
          <input 
            type="email" 
            placeholder="이메일" 
            className="w-full p-4 border border-gray-200 outline-none focus:border-black text-sm transition-all"
          />
          <input 
            type="password" 
            placeholder="비밀번호" 
            className="w-full p-4 border border-gray-200 outline-none focus:border-black text-sm transition-all"
          />
        </div>

        {/* 로그인 버튼 (블랙) */}
        <button 
          onClick={() => alert("패션 실험실에 오신 것을 환영합니다!")}
          className="w-full py-4 bg-black text-white text-xs font-bold tracking-widest hover:bg-gray-800 transition-all mb-3"
        >
          LOG IN
        </button>

        {/* 구글 로그인 버튼 */}
        <button className="w-full py-4 border border-gray-200 text-xs font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
          CONTINUE WITH GOOGLE
        </button>

        {/* 하단 보조 메뉴 */}
        <div className="mt-12 flex gap-4 text-[11px] text-gray-400 font-medium">
          <button className="hover:text-black">회원가입</button>
          <span className="text-gray-200">|</span>
          <button className="hover:text-black">비밀번호 찾기</button>
          <span className="text-gray-200">|</span>
          <button onClick={() => window.history.back()} className="hover:text-black">돌아가기</button>
        </div>
      </div>
      
      <p className="mt-10 text-[10px] text-gray-400 tracking-tighter">© 2026 AI-TRYON ALL RIGHTS RESERVED.</p>
    </div>
  );
}
