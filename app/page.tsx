"use client";

import React from 'react';

export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f8f8', // 약간 고급스러운 연한 회색 배경
      color: 'black',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 0,
      padding: 0
    }}>
      {/* 상단 네비게이션 */}
      <nav style={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '30px 60px',
        boxSizing: 'border-box'
      }}>
        <h1 style={{ fontSize: '28px', fontWeight: '900', letterSpacing: '-1.5px' }}>AI-TRYON</h1>
        <button style={{ 
          background: 'black', 
          color: 'white', 
          border: 'none', 
          padding: '10px 25px', 
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>LOGIN</button>
      </nav>

      {/* 메인 섹션 */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '120px',
        padding: '0 20px'
      }}>
        <span style={{ 
          fontSize: '12px', 
          letterSpacing: '0.6em', 
          color: '#888', 
          fontWeight: 'bold',
          display: 'block',
          marginBottom: '20px'
        }}>NEW ERA OF SHOPPING</span>
        
        <h2 style={{ 
          fontSize: '120px', // 글자 크기 대폭 확대!
          fontWeight: '900', 
          lineHeight: '0.8', 
          margin: '0 0 40px 0', 
          letterSpacing: '-6px' 
        }}>
          VIRTUAL<br/>
          <span style={{ color: '#ff4d00' }}>FITTING</span> {/* 포인트 컬러 주황색 */}
        </h2>

        <p style={{ 
          color: '#555', 
          fontSize: '20px', 
          lineHeight: '1.6', 
          marginBottom: '60px',
          fontWeight: '400'
        }}>
          거울 앞에 설 필요 없습니다. AI가 찾아주는<br/>
          당신에게 가장 완벽한 핏을 경험하세요.
        </p>

        <button style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '25px 100px',
          fontSize: '22px',
          fontWeight: '900',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '50px', // 둥근 버튼
          transition: '0.3s',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
        }}>
          지금 시작하기
        </button>
      </div>

      <footer style={{ marginTop: 'auto', fontSize: '11px', color: '#bbb', letterSpacing: '0.3em', padding: '60px' }}>
        © 2026 AI-TRYON STUDIOS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
