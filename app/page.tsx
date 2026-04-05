"use client";

import React from 'react';

export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0
    }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>
        AI <span style={{ color: '#ff4d00' }}>TRY-ON</span>
      </h1>
      <p style={{ color: '#888', fontSize: '20px' }}>연결 성공! 이제 화면이 바뀝니다.</p>
    </div>
  );
}
