/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This line tells Next.js to export static HTML
  images: {
    unoptimized: true, // This disables Next.js Image Optimization on Vercel/Next.js servers, making it work with static export on any host.
  },
};

module.exports = nextConfig; // Ensure this line uses module.exports