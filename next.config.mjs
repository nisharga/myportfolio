/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            },
            {
                protocol: 'https',
                hostname: 'user-images.githubusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'github-production-user-asset-6210df.s3.amazonaws.com'
            }
        ]
    }
};

export default nextConfig;
