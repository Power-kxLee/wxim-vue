var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/main.js', //模块的入口
  output: {
    path: path.resolve(__dirname, './www/dist'), //path.resolve转换成绝对路径,__dirname是项目根目录的绝对路径,然后把根目录的路径+ 需要打包存在的路径 
    publicPath: './dist/',
    filename: 'build.js'//打包后输出的文件名
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

//编译的时候 做一些处理
if (process.env.NODE_ENV === 'production') {

  module.exports.devto  // http://vue-loader.vuejs.org/en/workflow/production.html
ol = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}else{
  //生产环境的时候,修改publicPath
  module.exports.output.publicPath = '/www/dist/'
}
