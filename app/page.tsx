"use client";  // <--- 이 줄을 맨 위에 추가하세요!

import React from 'react';
// ... 나머지 코드

import { useAuth } from "./context/AuthContext"; // 같은 app 폴더 내 경로
import Link from "next/link";

export default function Home() {
  const { user, role, loading } = useAuth();

  // 1. 로딩 중일 때 (화면 멈춤 방지)
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white text-black">
        <p className="text-xl font-bold">시스템 연결 중...</p>
      </div>
    );
  }

  // 2. 메인 화면
  return (
    <main className="min-h-screen p-10 bg-white text-black">
      <div className="max-w-xl mx-auto border-2 border-gray-100 p-8 rounded-3xl shadow-sm text-center">
        <h1 className="text-4xl font-black mb-8 text-blue-600 italic">AI TRY-ON</h1>

        {user ? (
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-2xl">
              <p className="text-gray-600">반갑습니다!</p>
              <p className="font-bold text-lg">{user.email}</p>
              <p className="text-sm mt-2">현재 권한: <span className="text-blue-500 font-mono">[{role}]</span></p>
            </div>
            
            <div className="flex flex-col gap-3">
              {role === "admin" && (
                <Link href="/admin" className="w-full bg-red-500 text-white py-4 rounded-xl font-bold hover:bg-red-600 transition">
                  관리자 대시보드
                </Link>
              )}
              <Link href="/user" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition">
                AI 가상 피팅 시작
              </Link>
            </div>
          </div>
        ) : (
          <div className="py-10">
            <p className="text-gray-400 mb-8 italic">로그인 후 AI 피팅을 경험해보세요.</p>
            <Link href="/login" className="bg-black text-white px-12 py-4 rounded-full font-black text-xl hover:scale-105 transition-transform inline-block">
              START →
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}