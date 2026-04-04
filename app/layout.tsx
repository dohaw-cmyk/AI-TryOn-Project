import "./globals.css";
// 🛠️ 포인트: layout.tsx와 context 폴더는 같은 층에 있습니다.
import { AuthProvider } from "./context/AuthContext"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}