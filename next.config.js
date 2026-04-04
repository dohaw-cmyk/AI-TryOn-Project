/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! 주의: 타입 에러가 있어도 빌드를 강제로 완료시킵니다.
    ignoreBuildErrors: true,
  },
  eslint: {
    // 빌드 시 ESLint 체크도 무시하게 합니다.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig