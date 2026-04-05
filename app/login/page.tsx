"use client";

import React from 'react';

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="p-10 bg-white shadow-xl rounded-2xl border border-gray-100 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-2 text-blue-600">AI Try-On</h1>
        <p className="text-gray-500 mb-8 text-center">나에게 딱 맞는 스타일을 찾아보세요.</p>
        
        <button 
          onClick={() => alert("로그인 기능 준비 중!")}
          className="w-64 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
        >
          구글로 시작하기
        </button>

        <button 
          onClick={() => window.history.back()}
          className="mt-4 text-sm text-gray-400 hover:underline"
        >
          돌아가기
        </button>
      </div>
    </div>
  );
}
