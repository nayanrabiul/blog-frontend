/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'appstick-resources.s3.ap-southeast-1.amazonaws.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: '([a-z0-9]+).googleusercontent.com',
                port: '',
            }
        ],
    },
};

module.exports = nextConfig;


