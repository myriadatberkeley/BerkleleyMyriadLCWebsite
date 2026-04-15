/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
