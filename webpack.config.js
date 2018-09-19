const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  entry: {
    app:'./src/js/index.js',
    print:'./src/js/print.js'
  },
  plugins:[
    //先清除掉
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'Output Mangement',
      template:'index1.html',
      filename:path.resolve(__dirname,'./dist')
    }),

  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'//这里的[name]是根据入口entry来的
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:['file-loader']
      }
    ]
  }
};