/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  basePath: "/LiveHindustanClone",
  assetPrefix: "/LiveHindustanClone/",
};

export default nextConfig;
