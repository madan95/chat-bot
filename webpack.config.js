module.exports = {
  mode: 'development',
  entry: './src/js/script.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          "style-loader", //style nodes from JS strings
          "css-loader", // translate css into CommonJS
          "sass-loader", //compiles Sass to CSS, using Node Sass
        ]
      }
    ]
  }
};
