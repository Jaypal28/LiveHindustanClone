/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // IMPORTANT: Required for GitHub Pages
  output: "export",

  // Since Next.js cannot optimize images in static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Your GitHub repo name
  basePath: "/LiveHindustanClone",
  assetPrefix: "/LiveHindustanClone/",
};

export default nextConfig;
