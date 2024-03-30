/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pickbazarlaravel.s3.ap-southeast-1.amazonaws.com",
            },
        ],
    },
};

export default nextConfig;
