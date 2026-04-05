"use client";

import "./globals.css";
import React from 'react';

export default function HomePage() {
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
      padding: 0
    }}>
      <h1 style={{ fontSize: '40px', fontWeight: '900' }}>
        AI <span style={{ color: '#ff4d00' }}>TRY-ON</span> SUCCESS
      </h1>
      <p style={{ color: '#888', marginTop: '20px' }}>연결에 성공했습니다! 이제 디자인이 시작됩니다.</p>
      <button style={{
        marginTop: '30px',
        backgroundColor: '#ff4d00',
        color: 'white',
        padding: '15px 40px',
        border: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        화면 확인 완료
      </button>
    </div>
  );
}
