"use client";

import React from 'react';

export default function WelcomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '48px', fontWeight: '900' }}>
        AI <span style={{ color: '#ff4d00' }}>TRY-ON</span>
      </h1>
      <p style={{ fontSize: '20px', color: '#888', margin: '20px 0 40px' }}>
        가상 피팅 서비스에 오신 것을 환영합니다.
      </p>
      <button style={{
        backgroundColor: '#ff4d00',
        color: 'white',
        padding: '15px 50px',
        fontSize: '18px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        로그인하고 시작하기
      </button>
    </div>
  );
}
