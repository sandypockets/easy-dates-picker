const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/datePicker.js',
  mode: 'production',
  output: {
    filename: 'datepicker.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'DatePicker',
    libraryExport: 'default',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'datepicker.css',
    }),
  ],
  optimization: {
    minimizer: [
      `...`, // Includes the default minimizers (like Terser for JS)
      new CssMinimizerPlugin(),
    ],
  },
  externals: {
    // Optionally exclude dependencies from the output bundle
  },
};
