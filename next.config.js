/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Portofolio",
  assetPrefix: "/Portofolio/",
};

module.exports = nextConfig;
