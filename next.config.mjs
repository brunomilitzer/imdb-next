/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { dev }) {
        if (dev) {
            // Use a simpler, more reliable source map type
            config.devtool = 'cheap-module-source-map';
            // Ensure source maps are served under /_next/
            config.output.publicPath = '/_next/';
            // Standardize source map file naming
            config.output.sourceMapFilename = '[file].map';
        }
        return config;
    },
};

export default nextConfig;