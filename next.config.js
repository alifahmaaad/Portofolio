/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // kalo pakai <Image /> Next bawaan
  },
  basePath: "/Portofolio", // <- kalau deploy ke GitHub Pages, sesuaikan nama repo kamu
  assetPrefix: "/Portofolio/",
};

module.exports = nextConfig;
