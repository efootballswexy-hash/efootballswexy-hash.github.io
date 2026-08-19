/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Wajib ditambahkan jika Anda menggunakan next/image
  },
};

export default nextConfig;