"use client";

import React, { useState } from 'react';

export default function App() {
  const [view, setView] = useState('welcome');

  if (view === 'welcome') {
    return (
      <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>AI TRY-ON</h1>
        <button style={{ backgroundColor: '#ff4d00', color: '#fff', padding: '15px 30px', border: 'none', borderRadius: '8px', marginTop: '20px', cursor: 'pointer' }} onClick={() => setView('login')}>
          로그인 시작하기
        </button>
      </div>
    );
  }

  if (view === 'login') {
    return (
      <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2>로그인 화면</h2>
        <input type="text" placeholder="아이디" style={{ padding: '10px', margin: '10px', width: '200px' }} />
        <button style={{ backgroundColor: '#ff4d00', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer' }} onClick={() => setView('studio')}>
          로그인 완료
        </button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <h1>스튜디오 작업실</h1>
      <p>로그인에 성공했습니다!</p>
    </div>
  );
}
