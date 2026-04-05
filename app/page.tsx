"use client";

import React, { useState } from 'react';

export default function StudioPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'sans-serif',
      padding: '20px'
    }}>
      {/* 헤더 */}
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #222' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ff4d00' }}>AI TRY-ON STUDIO</h1>
        <div style={{ fontSize: '14px', color: '#888' }}>사용자님 환영합니다</div>
      </header>

      {/* 메인 작업 영역 */}
      <main style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '20px', 
        justifyContent: 'center', 
        marginTop: '40px' 
      }}>
        
        {/* 1. 사람 사진 업로드 */}
        <div style={{ width: '350px', height: '450px', border: '2px dashed #333', borderRadius: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111' }}>
          <p style={{ color: '#666' }}>본인 또는 모델 사진 업로드</p>
          <button style={{ marginTop: '15px', padding: '10px 20px', borderRadius: '5px', border: '1px solid #444', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}>파일 선택</button>
        </div>

        {/* 2. 옷 사진 업로드 */}
        <div style={{ width: '350px', height: '450px', border: '2px dashed #333', borderRadius: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111' }}>
          <p style={{ color: '#666' }}>입혀볼 의류 사진 업로드</p>
          <button style={{ marginTop: '15px', padding: '10px 20px', borderRadius: '5px', border: '1px solid #444', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}>파일 선택</button>
        </div>
      </main>

      {/* 생성 버튼 */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button style={{
          backgroundColor: '#ff4d00',
          color: 'white',
          padding: '20px 100px',
          fontSize: '20px',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          boxShadow: '0 0 30px rgba(255, 77, 0, 0.4)'
        }}>
          AI 가상 피팅 시작하기
        </button>
      </div>

      {/* 결과 영역 (미리보기) */}
      <div style={{ marginTop: '60px', textAlign: 'center', color: '#444' }}>
        <p>결과물은 이곳에 표시됩니다.</p>
      </div>
    </div>
  );
}
