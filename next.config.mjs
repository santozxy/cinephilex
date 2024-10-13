/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/w200/*",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/w500/*",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/original/*",
      },
    ],
  },
};

export default nextConfig;
