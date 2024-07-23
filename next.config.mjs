/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://raw.githubusercontent.com/DoughFernandes/Data-Profile/main/data/profile.json"
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

export default nextConfig;

