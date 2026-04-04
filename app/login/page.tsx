export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">로그인 페이지</h1>
      <p className="mt-4">여기에 로그인 기능을 넣을 예정입니다.</p>
      <button 
        onClick={() => window.history.back()}
        className="mt-6 bg-gray-200 px-4 py-2 rounded"
      >
        뒤로가기
      </button>
    </div>
  );
}