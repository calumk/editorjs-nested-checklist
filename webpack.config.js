const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.pcss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-nested-ancestors'),
                  require('postcss-nested'),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.js' ],
  },
  output: {
    filename: 'nested-checklist.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'NestedChecklist',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
};
