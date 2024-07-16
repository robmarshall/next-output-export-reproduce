/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: "/app",
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
