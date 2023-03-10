const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { resolve } = require('path');

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: 'development',
  entry: {
    main: {
      import: ["./src/main.tsx"],
    }
  },
  output: {
    path: 'dist/',
    publicPath: '/',
    filename: isProd ? '[name].[contenthash:8][ext]' : '[name][ext]',
  },
  devServer: {
    port: 4200,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        type: 'css/module',
      },
    ],
  },
  resolve: {
    // Manually map paths from tsconfig.
    alias: {
      ui: resolve(__dirname, 'ui/src/index.ts')
    },
    // This is not working it seems?
    plugins: [new TsconfigPathsPlugin({
      configFile: resolve(__dirname, 'tsconfig.base.json')
    })]
  },
  infrastructureLogging: {
    debug: false,
  },
  builtins: {
    html: [{
      template: './index.html'
    }],
    define: {
      'process.env.NODE_ENV': isProd ? "'production'" : "'development'"
    },
    progress: {},
    react: {
      runtime: 'automatic',
      development: isDev,
      refresh: isDev,
    }
  },
};

