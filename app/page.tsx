"use client";

import React from 'react';

export default function HomePage() {
  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a', // 세련된 블랙 배경
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    overflowX: 'hidden'
  };

  return (
    <div style={containerStyle}>
      {/* 상단 로고 및 메뉴 */}
      <nav style={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '40px 80px',
        boxSizing: 'border-box',
        position: 'absolute',
        top: 0
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-1px', margin: 0, cursor: 'pointer' }}>
          AI <span style={{ color: '#ff4d00' }}>TRY-ON</span>
        </h1>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', fontWeight: '500', opacity: 0.6, cursor: 'pointer' }}>COLLECTION</span>
          <span style={{ fontSize: '13px', fontWeight: '500', opacity: 0.6, cursor: 'pointer' }}>ABOUT</span>
          <button style={{ 
            background: 'white', 
            color: 'black', 
            border: 'none', 
            padding: '8px 20px', 
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>LOGIN</button>
        </div>
      </nav>

      {/* 중앙 메인 카피 */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '25vh',
        maxWidth: '1000px',
        padding: '0 20px'
      }}>
        <div style={{ 
          display: 'inline-block',
          padding: '6px 12px',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '100px',
          fontSize: '10px',
          letterSpacing: '0.3em',
          marginBottom: '30px',
          color: '#aaa'
        }}>FUTURE OF FASHION</div>
        
        <h2 style={{ 
          fontSize: 'clamp(60px, 10vw, 150px)', // 화면 크기에 따라 유동적으로 커짐
          fontWeight: '900', 
          lineHeight: '0.85', 
          margin: '0 0 40px 0', 
          letterSpacing: '-0.05em',
          textTransform: 'uppercase'
        }}>
          Wear the<br/>
          <span style={{ 
            backgroundImage: 'linear-gradient(45deg, #ff4d00, #ff9000)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Impossible</span>
        </h2>

        <p style={{ 
          color: '#888', 
          fontSize: '18px', 
          lineHeight: '1.6', 
          marginBottom: '60px',
          fontWeight: '300',
          maxWidth: '600px',
          margin: '0 auto 60px'
        }}>
          옷장에 없는 옷도 당신의 핏으로 확인할 수 있습니다.<br/>
          가장 진보된 AI 가상 피팅 솔루션을 경험하세요.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button style={{
            backgroundColor: '#ff4d00',
            color: 'white',
            padding: '18px 50px',
            fontSize: '16px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
            transition: '0.2s'
          }}>START FITTING</button>
          
          <button style={{
            backgroundColor: 'transparent',
            color: 'white',
            padding: '18px 50px',
