"use client";

import React, { useState } from 'react';

export default function App() {
  // 현재 어떤 화면인지 숫자로 관리 (0: 대문, 1: 로그인, 2: 작업실)
  const [step, setStep] = useState(0);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      
      {step === 0 && (
        <div>
          <h1 style={{ fontSize: '50px', color: '#ff4d00' }}>WELCOME</h1>
          <button 
            style={{ padding: '20px 40px', fontSize: '20px', cursor: 'pointer', backgroundColor: '#ff4d00', color: 'white', border: 'none', borderRadius: '10px' }}
            onClick={() => { console.log("로그인 클릭됨"); setStep(1); }}
          >
            로그인 시작하기
          </button>
        </div>
      )}

      {step === 1 && (
        <div>
          <h1 style={{ color: '#ff4d00' }}>LOGIN PAGE</h1>
          <p>여기는 로그인 화면입니다.</p>
          <button 
            style={{ padding: '15px 30px', cursor: 'pointer' }}
            onClick={() => setStep(2)}
          >
            로그인 완료 (다음으로)
          </button>
          <p onClick={() => setStep(0)} style={{ cursor: 'pointer', color: '#666', marginTop: '20px' }}>뒤로가기</p>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1 style={{ color: '#ff4d00' }}>STUDIO</h1>
          <p>축하합니다! 작업실에 들어오셨습니다.</p>
          <button onClick={() => setStep(0)} style={{ cursor: 'pointer' }}>로그아웃</p>
        </div>
      )}

    </div>
  );
}
