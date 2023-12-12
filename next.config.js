/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            // 'http://i.annihil.us',
            'https://raw.githubusercontent.com',
        ],
        remotePatterns: [
            {
                protocol: "https",
                // hostname:"i.annihil.us",
                hostname: "raw.githubusercontent.com",
                port: "",
                pathname: "/**",
            }
        ]
    }
}

module.exports = nextConfig
