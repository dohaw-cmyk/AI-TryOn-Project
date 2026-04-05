"use client";

import React, { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(0);

  // 버튼 누르면 step이 1로 바뀌면서 로그인창이 뜹니다.
  const goToLogin = () => setStep(1);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      
      {step === 0 && (
        <div>
          <h1 style={{ fontSize: '48px', fontWeight: '900' }}>AI <span style={{ color: '#ff4d00' }}>TRY-ON</span></h1>
          <p style={{ color: '#888', margin: '20px 0' }}>가상 피팅 서비스에 오신 것을 환영합니다.</p>
          <button 
            onClick={goToLogin}
            style={{ backgroundColor: '#ff4d00', color: 'white', padding: '15px 50px', fontSize: '18px', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            로그인하고 시작하기
          </button>
        </div>
      )}

      {step === 1 && (
        <div style={{ width: '300px' }}>
          <h2 style={{ color: '#ff4d00' }}>LOGIN</h2>
          <input type="text" placeholder="아이디" style={{ width: '100%', padding: '10px', margin: '10px 0', backgroundColor: '#111', border: '1px solid #333', color: '#fff' }} />
          <button 
            onClick={() => alert('로그인 성공!')} 
            style={{ width: '100%', padding: '10px', backgroundColor: '#ff4d00', color: '#fff', border: 'none', cursor: 'pointer' }}
          >
            로그인 완료
          </button>
          <p onClick={() => setStep(0)} style={{ marginTop: '20px', color: '#666', cursor: 'pointer', fontSize: '14px' }}>← 돌아가기</p>
        </div>
      )}

    </div>
  );
}
