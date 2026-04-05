"use client";

import React, { useState } from 'react';

export default function App() {
  // 현재 어떤 화면을 보여줄지 결정하는 '상태' (welcome, login, studio)
  const [view, setView] = useState('welcome');

  // 1. 대문 화면 (Welcome)
  if (view === 'welcome') {
    return (
      <div style={containerStyle}>
        <h1 style={logoStyle}>AI <span style={{ color: '#ff4d00' }}>TRY-ON</span></h1>
        <p style={subTextStyle}>당신만의 가상 피팅룸에 오신 것을 환영합니다.</p>
        <button style={mainButtonStyle} onClick={() => setView('login')}>
          로그인하고 시작하기
        </button>
      </div>
    );
  }

  // 2. 로그인 화면 (Login)
  if (view === 'login') {
    return (
      <div style={containerStyle}>
        <h2 style={{ fontSize: '32px', color: '#ff4d00', marginBottom: '10px' }}>LOGIN</h2>
        <p style={{ color: '#888', marginBottom: '30px' }}>계정 정보를 입력해주세요</p>
        <div style={{ width: '100%', maxWidth: '350px' }}>
          <input type="email" placeholder="이메일" style={inputStyle} />
          <input type="password" placeholder="비밀번호" style={inputStyle} />
          <button style={mainButtonStyle} onClick={() => setView('studio')}>
            로그인 완료
          </button>
          <p style={{ marginTop: '20px', fontSize: '13px', color: '#444', cursor: 'pointer' }} onClick={() => setView('welcome')}>
            ← 돌아가기
          </p>
        </div>
      </div>
    );
  }

  // 3. 메인 작업실 (Studio)
  return (
    <div style={{ ...containerStyle, justifyContent: 'flex-start', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '20px', color: '#ff4d00', marginBottom: '40px' }}>AI TRY-ON STUDIO</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={uploadBoxStyle}>모델 사진 업로드</div>
        <div style={uploadBoxStyle}>의류 사진 업로드</div>
      </div>
      <button style={{ ...mainButtonStyle, marginTop: '50px', width: 'auto', padding: '20px 80px' }}>
        AI 피팅 시작
      </button>
      <p style={{ marginTop: '30px', color: '#444', cursor: 'pointer' }} onClick={() => setView('login')}>로그아웃</p>
    </div>
  );
}

// --- 디자인 스타일 모음 ---
const containerStyle: React.CSSProperties = {
  minHeight: '100vh', backgroundColor: '#000', color: '#fff',
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
  fontFamily: 'sans-serif', textAlign: 'center', margin: 0
};

const logoStyle = { fontSize: '48px', fontWeight: '900', marginBottom: '10px' };
const subTextStyle = { fontSize: '18px', color: '#888', marginBottom: '40px' };

const mainButtonStyle = {
  backgroundColor: '#ff4d00', color: 'white', padding: '18px 40px',
  fontSize: '16px', fontWeight: 'bold', border: 'none', borderRadius: '8px',
  cursor: 'pointer', width: '100%'
};

const inputStyle = {
  width: '100%', padding: '15px', marginBottom: '15px', backgroundColor: '#111',
  border: '1px solid #333', borderRadius: '8px', color: '#fff', outline: 'none'
};

const uploadBoxStyle = {
  width: '300px', height: '400px', border: '2px dashed #333', borderRadius: '15px',
  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', backgroundColor: '#0a0a0a'
};
