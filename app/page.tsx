"use client";

import React from 'react';

export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'white',
      color: 'black',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px'
    }}>
      {/* 헤더 */}
      <nav style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '100px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', margin: 0 }}>AI-TRYON</h1>
        <button style={{ background: 'none', border: 'none', borderBottom: '2px solid black', cursor: 'pointer', fontWeight: 'bold' }}>LOGIN</button>
      </nav>

      {/* 메인 내용 */}
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.5em', color: '#aaa', fontWeight: 'bold' }}>NEXT GENERATION FASHION</span>
        <h2 style={{ fontSize: '80px', fontWeight: '900', lineHeight: '0.9', margin: '20px 0', letterSpacing: '-4px' }}>
          VIRTUAL<br/>FITTING
        </h2>
        <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
          AI가 제안하는 당신의 새로운 스타일.<br/>
          지금 바로 가상 피팅을 체험해보세요.
        </p>

        <button style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '20px 80px',
          fontSize: '20px',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}>
          GET STARTED
        </button>
      </div>

      <footer style={{ marginTop: 'auto', fontSize: '10px', color: '#ccc', letterSpacing: '0.5em', padding: '40px' }}>
        © 2026 AI-TRYON STUDIOS.
      </footer>
    </div>
  );
}
