const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: Path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    path: Path.resolve(__dirname, '../build'),
    filename: 'index.bundle.js',
  },
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, '../src'),
      '@@': Path.resolve(__dirname, '../public/images'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    port: 8000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../public/index.html'),
    }),
  ],
};
