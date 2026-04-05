"use client"; // 1번 필수

export const dynamic = "force-dynamic";
import React from 'react';
// 만약 다른 import가 있다면 그 밑에 두세요.

// [핵심] Vercel이 미리 검사(Prerender)하지 못하게 강제로 막는 설정입니다.
export const dynamic = "force-dynamic"; 

export default function LoginPage() {
  const handleLogin = () => {
    console.log("로그인 버튼 클릭!");
    // 로그인 로직...
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">로그인</h1>
      <button 
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        로그인하기
      </button>
    </div>
  );
}
