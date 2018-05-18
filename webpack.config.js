const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {
                  "targets": {
                    "node": "current"
                  }
                }]
              ],
              plugins: [
                [
                  "transform-react-jsx",
                  {
                    "pragma": "h"
                  }
                ]
              ]
            }
          },
          {
            loader: 'shebang-loader',
          }
        ]
      }
    ]
  },

  target: 'node',
  externals: [nodeExternals()],

  entry: {
    app: [
      path.resolve(__dirname, 'src/app.js')
    ]
  },

  output: {
    filename: 'otakumesi.js',
    path: path.resolve(__dirname, 'cli/')
  },

  plugins: [
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true, entryOnly: true })
  ]
};
