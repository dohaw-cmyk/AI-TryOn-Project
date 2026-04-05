"use client";

import "./globals.css";
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
      padding: 0,
      overflowX: 'hidden'
    }}>
      {/* 상단 네비게이션 */}
      <nav style={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '40px 60px', 
        boxSizing: 'border-box' 
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-1px', margin: 0 }}>
          AI <span style={{ color: '#ff4d00' }}>TRY-ON</span>
        </h1>
        <div style={{ fontSize: '14px', fontWeight: 'bold', borderBottom: '1px solid white', cursor: 'pointer' }}>LOGIN</div>
      </nav>

      {/* 메인 섹션 */}
      <div style={{ textAlign: 'center', marginTop: '15vh', padding: '0 20px' }}>
        <div style={{ 
          letterSpacing: '0.5em', 
          color: '#888', 
          fontSize: '12px', 
          marginBottom: '20px', 
          fontWeight: 'bold' 
        }}>NEXT GENERATION FASHION</div>
        
        <h2 style={{ 
          fontSize: 'clamp(50px, 10vw, 100px)', 
          fontWeight: '900', 
          lineHeight: '0.9', 
          margin: '0 0 40px 0', 
          letterSpacing: '-4px' 
        }}>
          VIRTUAL<br/>
          <span style={{ color: '#ff4d00' }}>FITTING</span>
        </h2>

        <p style={{ 
          color: '#aaa', 
          fontSize: '18px', 
          marginBottom: '60px', 
          fontWeight: '300'
        }}>거울 앞에 설 필요 없습니다. AI가 찾아주는<br/>당신에게 가장 완벽한 핏을 경험하세요.</p>

        <button style={{
          backgroundColor: '#ff4d00',
          color: 'white',
          padding: '20px 80px',
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
