/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: 'cards.scryfall.io'},
        ]
    }
};

export default nextConfig;
