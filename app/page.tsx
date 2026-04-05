"use client";

import React from 'react';

export default function WelcomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      textAlign: 'center'
    }}>
      {/* 로고 영역 */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '900', letterSpacing: '-2px' }}>
          AI <span style={{ color: '#ff4d00' }}>TRY-ON</span>
        </h1>
        <p style={{ color: '#666', fontSize: '14px', letterSpacing: '4px' }}>VIRTUAL FITTING ROOM</p>
      </div>

      {/* 메인 메시지 */}
      <h2 style={{ fontSize: '24px', fontWeight: '300', marginBottom: '50px', lineHeight: '1.5' }}>
        당신을 위한 새로운 스타일링,<br/>
        지금 바로 시작해보세요.
      </h2>

      {/* 로그인 유도 버튼 */}
      <button style={{
        backgroundColor: '#ff4d00',
        color: 'white',
        padding: '18px 60px',
        fontSize: '16px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        boxShadow: '0 10px 20px rgba(255, 77, 0, 0.2)'
      }}>
        로그인하고 시작하기
      </button>

      <p style={{ marginTop: '30px', fontSize: '12px', color: '#444' }}>
        계정이 없으신가요? <span style={{ color: '#888', textDecoration: 'underline', cursor: 'pointer' }}>회원가입</span>
      </p>
    </div>
  );
}
