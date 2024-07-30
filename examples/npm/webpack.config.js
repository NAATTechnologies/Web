const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let modules = ['capture-id&A', 'liveness-3D', 'fadweb', 'capture-id&R', 'signature', 'videoagreement', 'videotaping', 'capture-id', 'liveness-3D&I'];
let multipleHtmlPlugins = modules.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}/${name}-example.html`, // relative path to the HTML files
    filename: `${name}/${name}-example.html`, // output HTML files
    chunks: [`${name}`], // respective JS files
  })
});

module.exports = {
  entry: {
    'index': ['./src/index.ts', './src/index.css'],
    'capture-id&A/capture-id&A-example': ['./src/capture-id&A/capture-id&A-example.ts'],
    'liveness-3D/liveness-3D-example': ['./src/liveness-3D/liveness-3D-example.ts'],
    'fadweb/fadweb-example': ['./src/fadweb/fadweb-example.ts'],
    'capture-id&R/capture-id&R-example': ['./src/capture-id&R/capture-id&R-example.ts'],
    'signature/signature-example': ['./src/signature/signature-example.ts'],
    'videoagreement/videoagreement-example': ['./src/videoagreement/videoagreement-example.ts'],
    'videotaping/videotaping-example': ['./src/videotaping/videotaping-example.ts'],
    'capture-id/capture-id-example': ['./src/capture-id/capture-id-example.ts'],
    'liveness-3D&I/liveness-3D&I-example': ['./src/liveness-3D&I/liveness-3D&I-example.ts']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css'
    })
  ].concat(multipleHtmlPlugins),
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};