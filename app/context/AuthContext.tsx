"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "../lib/firebase"; // 사진 구조에 맞춘 정확한 경로
import { doc, getDoc } from "firebase/firestore";

interface AuthContextType {
  user: User | null;
  role: "admin" | "buyer" | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<"admin" | "buyer" | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          setUser(currentUser);
          // Firestore 'users' 컬렉션 확인
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          setRole(userDoc.exists() ? userDoc.data().role : "buyer");
        } else {
          setUser(null);
          setRole(null);
        }
      } catch (error) {
        console.error("인증 에러:", error);
      } finally {
        setLoading(false); // 로딩 끝! (이게 되어야 CPU 소리가 멈춤)
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);