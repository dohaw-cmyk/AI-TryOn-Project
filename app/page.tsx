"use client";
import React, { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(0); // 0: 대문, 1: 로그인, 2: 작업실
  const [image, setImage] = useState<string | null>(null);

  // 사진 선택 시 화면에 보여주는 기능
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      
      {/* 1. 대문 */}
      {step === 0 && (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '50px', color: '#ff4d00' }}>AI TRY-ON</h1>
          <button style={btnStyle} onClick={() => setStep(1)}>로그인하고 시작하기</button>
        </div>
      )}

      {/* 2. 로그인 (임시) */}
      {step === 1 && (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#ff4d00' }}>LOGIN</h2>
          <button style={btnStyle} onClick={() => setStep(2)}>로그인 완료</button>
        </div>
      )}

      {/* 3. 작업실 (사진 업로드 테스트 가능!) */}
      {step === 2 && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2 style={{ color: '#ff4d00' }}>STUDIO</h2>
          <div style={{ width: '300px', height: '400px', border: '2px dashed #333', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {image ? <img src={image} style={{ width: '100%' }} /> : <p>사진을 선택하세요</p>}
          </div>
          <input type="file" onChange={handleImageChange} style={{ marginBottom: '20px' }} />
          <br />
          <button style={{...btnStyle, backgroundColor: '#444'}} onClick={() => setStep(0)}>로그아웃</button>
        </div>
      )}

    </div>
  );
}

const btnStyle = { backgroundColor: '#ff4d00', color: 'white', padding: '15px 40px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' };
