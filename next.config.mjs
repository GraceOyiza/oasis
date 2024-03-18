/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "s3-eu-central-1.amazonaws.com",
            port: "",
            pathname: "/mycompany-data-bucket-dev/**",
          },
          {
            protocol: "http",
            hostname: "localhost",
            port: "3000"
          },
        ],
      },
      webpack(config) {
        config.resolve.fallback = {
    
          // if you miss it, all the other options in fallback, specified
          // by next.js will be dropped.
          ...config.resolve.fallback,  
    
          fs: false, // the solution
        };
        
        return config;
      }
};

export default nextConfig;
