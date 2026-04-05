"use client";

import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      {/* 뒤로가기 혹은 로고 */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#ff4d00' }}>LOGIN</h2>
        <p style={{ color: '#888', marginTop: '10px' }}>AI TRY-ON 계정으로 로그인하세요</p>
      </div>

      {/* 로그인 폼 박스 */}
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '20px',
        boxSizing: 'border-box'
      }}>
        {/* 이메일 입력창 */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#aaa' }}>이메일 주소</label>
          <input 
            type="email" 
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#1a1a1a',
              border: '1px solid #333',
              borderRadius: '8px',
              color: 'white',
              outline: 'none'
            }}
          />
        </div>

        {/* 비밀번호 입력창 */}
        <div style={{ marginBottom: '30px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#aaa' }}>비밀번호</label>
          <input 
            type="password" 
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#1a1a1a',
              border: '1px solid #333',
              borderRadius: '8px',
              color: 'white',
              outline: 'none'
            }}
          />
        </div>

        {/* 로그인 버튼 */}
        <button style={{
          width: '100%',
          padding: '18px',
          backgroundColor: '#ff4d00',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}>
          로그인
        </button>

        {/* 하단 링크 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#666' }}>
          <span style={{ cursor: 'pointer' }}>비밀번호 찾기</span>
          <span style={{ cursor: 'pointer', color: '#aaa' }}>회원가입 하기</span>
        </div>
      </div>
    </div>
  );
}
