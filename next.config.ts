import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/kontakt",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/uslugi",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/mójBlog",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
