/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack: (config, { isServer }) => {
    // 只在伺服器端執行
    if (isServer) {
      // 忽略 fs 模組
      config.externals.push("fs");
    }

    // 設定 opencv.js 的路徑
    // config.resolve.alias["opencv.js"] = path.resolve(
    //   __dirname,
    //   "public/opencv/opencv.js"
    // );

    return config;
  },
};
module.exports = nextConfig;
