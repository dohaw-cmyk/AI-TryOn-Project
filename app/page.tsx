"use client"; // 무조건 이 줄이 1번 줄이어야 합니다!

import React from 'react';

export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 0,
      padding: 0
    }}>
      <nav style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '40px 60px', boxSizing: 'border-box' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-1px', margin: 0 }}>AI <span style={{ color: '#ff4d00' }}>TRY-ON</span></h1>
        <div style={{ fontSize: '14px', fontWeight: 'bold', borderBottom: '1px solid white', cursor: 'pointer' }}>LOGIN</div>
      </nav>

      <div style={{ textAlign: 'center', marginTop: '150px', padding: '0 20px' }}>
        <div style={{ letterSpacing: '0.5em', color: '#888', fontSize: '12px', marginBottom: '20px', fontWeight: 'bold' }}>NEXT GENERATION FASHION</div>
        <h2 style={{ fontSize: 'clamp(50px, 8vw, 100px)', fontWeight: '900', lineHeight: '0.9', margin: '0 0 40px 0', letterSpacing: '-4px' }}>
          VIRTUAL<br/>
          <span style={{ color: '#ff4d00' }}>FITTING</span>
        </h2>
        <p style={{ color: '#aaa', fontSize: '18px', marginBottom: '60px', fontWeight: '300' }}>당신만의 완벽한 핏을 AI로 확인하세요.</p>
        <button style={{
          backgroundColor: '#ff4d00',
          color: 'white',
          padding: '20px 70px',
          fontSize: '18px',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          boxShadow: '0 10px 30px rgba(255, 77, 0, 0.3)'
        }}>START NOW</button>
      </div>

      <footer style={{ marginTop: 'auto', fontSize: '10px', color: '#444', letterSpacing: '0.2em', padding: '60px' }}>
        © 2026 AI-TRYON STUDIOS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
