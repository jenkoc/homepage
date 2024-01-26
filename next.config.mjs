
/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["geist"],
  sassOptions: {
    includePaths: ["./styles"],
  },
};

export default nextConfig;
