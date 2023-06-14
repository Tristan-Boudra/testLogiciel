const path = require('path');

module.exports = {
    entry: './src/app.jsx',
    
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 3000,
    },
  };
  