module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: __dirname +'/public/js/',
    publicPath: '/public/js/',
    filename: 'bundle.js'
  },
  module: {
    noParse: ["React", "ReactDOM"],
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {"react": "./configs/dontBundle.js", "react-dom": "./configs/dontBundle.js"}
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
