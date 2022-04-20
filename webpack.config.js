const path = require('path');

module.exports = {
  entry: './src/nested-checklist.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'editorjs-nested-checklist.bundle.js',
    library: 'editorjsNestedChecklist',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
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
      {
        test: /\.svg$/,
        use : [{
            loader  : 'svg-inline-loader',
            options : {
                removeSVGTagAttrs : false
            }
        }]
      }
    ],
  },
  resolve: {
    extensions: [ '.js' ],
  }
};
