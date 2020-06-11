const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const PATHS = {
  src: path.join(__dirname, '../', 'src'),
  images: path.join(__dirname, '../', 'src/images'),
  styles: path.join(__dirname, '../', 'src/styles'),
  build: path.join(__dirname, '../', 'build'),
  dist: path.join(__dirname, '../', 'docs'),
  index: path.join(__dirname, '../', 'src/index.html'),
  entry: './index.js',
}

// eslint-disable-next-line
console.log(PATHS)

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  entry: './src/index.js',
  output: {
    path: PATHS.dist,
    publicPath: './',
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[id].[hash].css',
  },
  devServer: {
    contentBase: '../dist',
  },
  resolve: {
    extensions: ['*', '.js', '.png'],
  },
  plugins: [
    new UglifyJsPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?hash=sha512&digest=hex',
        options: {
          outputPath: 'images',
          name: '[name].[hash].[ext]',
          esModule: false,
        },
      },
    ],
  },
}
