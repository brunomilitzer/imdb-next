/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { dev }) {
        if (dev) {
            config.devtool = 'cheap-module-source-map';
            config.output.publicPath = '/_next/';
            config.output.sourceMapFilename = '[file].map';
        }

        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
            },
        ],
    },
};

export default nextConfig;