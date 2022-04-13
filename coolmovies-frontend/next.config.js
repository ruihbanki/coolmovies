/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx"],
  images: {
    domains: ["upload.wikimedia.org", "images-na.ssl-images-amazon.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/movies",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: "http://localhost:5001/graphql",
      },
    ];
  },
};
