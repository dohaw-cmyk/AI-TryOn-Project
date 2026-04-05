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
      <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>
        AI <span style={{ color: '#ff4d00' }}>TRY-ON</span> SHOP
      </h1>
      <p style={{ color: '#888' }}>서버 연결 성공! 디자인을 시작합니다.</p>
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
        접속 확인 완료
      </button>
    </div>
  );
}
