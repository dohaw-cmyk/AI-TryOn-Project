"use client";
import { useState } from "react";

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");

  // 임시 비밀번호 체크 (나중에는 Firebase Auth로 연동)
  const handleLogin = () => {
    if (password === "admin1234") {
      setIsAdmin(true);
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  if (!isAdmin) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-2xl font-bold mb-4">관리자 로그인</h1>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mr-2 text-black"
          placeholder="비밀번호 입력"
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
          접속
        </button>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">대시보드 (관리자 모드)</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-100 p-6 rounded shadow">
          <h2 className="font-bold">전체 업로드 수</h2>
          <p className="text-2xl">12개</p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow">
          <h2 className="font-bold">오늘 방문자</h2>
          <p className="text-2xl">5명</p>
        </div>
      </div>
      
      <button className="mt-10 bg-red-500 text-white px-4 py-2 rounded">
        로그아웃
      </button>
    </div>
  );
}