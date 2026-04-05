"use client";

import React from 'react';

export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0',
      margin: '0'
    }}>
      <nav style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '40px 60px', boxSizing: 'border-box' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '-2px', margin: '0' }}>AI-TRYON</h1>
        <div style={{ fontWeight: 'bold', borderBottom: '2px solid black' }}>LOGIN</div>
      </nav>

      <div style={{ textAlign: 'center', marginTop: '150px' }}>
        <p style={{ fontSize: '14px', letterSpacing: '0.5em', color: '#888', fontWeight: 'bold' }}>NEXT FASHION TECH</p>
        <h2 style={{ fontSize: '100px', fontWeight: '900', lineHeight: '0.9', margin: '20px 0', letterSpacing: '-5px' }}>
          VIRTUAL<br/>FITTING
        </h2>
        <p style={{ color: '#666', fontSize: '18px', marginBottom: '50px' }}>AI가 제안하는 당신의 새로운 스타일.</p>
        <button style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '25px 80px',
          fontSize: '20px',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '50px'
        }}>지금 시작하기</button>
      </div>
    </div>
  );
}
