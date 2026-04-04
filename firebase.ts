"use client";

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "선생님의_API_KEY",
  authDomain: "선생님의_PROJECT_ID.firebaseapp.com",
  projectId: "선생님의_PROJECT_ID",
  storageBucket: "선생님의_PROJECT_ID.appspot.com",
  messagingSenderId: "선생님의_SENDER_ID",
  appId: "선생님의_APP_ID"
};

// 앱이 이미 초기화되었는지 확인 후 초기화
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };