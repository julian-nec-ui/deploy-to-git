import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  
  // basePath: '/deploy-to-git',
  // assetPrefix: '/deploy-to-git' // Ensures assets load from the subfolder
  // async headers () {
  //   return [
  //     {
  //       // matching all API routes
  //       source: '/api/:path*',
  //       headers: [
  //         { key: 'Access-Control-Allow-Credentials', value: 'true' },
  //         { key: 'Access-Control-Allow-Origin', value: 'http://127.0.0.1:3000' }, // replace this your actual origin
  //         {
  //           key: 'Access-Control-Allow-Methods',
  //           value: 'GET,DELETE,PATCH,POST,PUT'
  //         },
  //         {
  //           key: 'Access-Control-Allow-Headers',
  //           value:
  //             'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/youtube-proxy/:path*',
  //       destination: 'https://youtube.com*',
  //     },
  //     {
  //       source: '/app/',
  //       destination: 'https://youtube.com*'
  //     }
  //   ];
  // }
}

export default nextConfig;
