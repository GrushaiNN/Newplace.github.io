const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
    entry: { main: './src/script.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
      rules: [{
          test: /\.js$/, // регулярное выражение, которое ищет все js файлы
          use: { loader: "babel-loader" }, // весь JS обрабатывается пакетом babel-loader
          exclude: /node_modules/ // исключает папку node_modules
              },
              {
                test: /\.css$/i,
                    use: [
                                    (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                                    {
                                      loader:'css-loader',
                                      options: {
                                          importLoaders: 2
                                      }
                                  },
                                    'postcss-loader'
                            ]
            },
            {
              test: /\.(png|jpg|gif|ico|svg)$/,
              use: [
               {
              loader: 'file-loader',
              options: {
                  name: '[path][name].[ext]',
                  outputPath: 'images',
                              }
                    },
                    {
              loader: 'image-webpack-loader',
              options: {
                  name: '[path][name].[ext]',
                  outputPath: 'images',
                              }
                    }
                   ]
       },
       {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name',
        options: {
                  name: '[name].[ext]',
                  outputPath: 'vendor',
                              }
        }
          ]
      },
    plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
  }),
  new MiniCssExtractPlugin({filename: 'style.[contenthash].css'}),
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorPluginOptions: {
            preset: ['default'],
    },
    canPrint: true
}),
  new WebpackMd5Hash(),
  new webpack.DefinePlugin({
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
})
  ]
}