const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  assetPrefix: isProd ? '/my-nextjs-app/' : '',
  basePath: isProd ? '/my-nextjs-app' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192, // 轉成 base64 的大小限制，可改
            name: '[name].[hash:8].[ext]',
            esModule: false,
          },
        },
      ],
    });
    return config;
  },
};
