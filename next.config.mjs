/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "7uwkdamk4div2qlc.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
