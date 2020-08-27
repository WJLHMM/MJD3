// 向外暴露一个打包的配置文件
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

// 创建一个插件的实例，也可以在modulex.export中plugins中配置
const htmlPlugin = new htmlWebpackPlugin({
  template: path.join(__dirname, '/public/index.html'), // Html文件位置
  filename: 'index.html',
})

module.exports = {
  mode: 'development', // development or production
  entry: {
    main: path.join(__dirname, "/src/index.js"),
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].js',
    publicPath: "/", /* 在配置二级更多极路由时候 刷新会出现 404的报错，是因为使用BrowserRouter需后台后台配合，在开发环境中配置本行和 historyApiFallback: true */
  },
  plugins: [
    htmlPlugin,
  ],
  module: { // 所有第三方，模块的配置规则
    rules: [// 第三方匹配规则
      {
		        test: /\.js|.jsx?$/,
		        enforce: 'pre',
		        loader: "eslint-loader",
		        include: /src/,
		    },
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      // 考虑到第三方模块的引用效率，鉴于第三方模块均使用css，所以自己写的式样使用.less,.scss,而css的式样不用模块化
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 配置处理.css文件的第三方loader规则,并且不使用css modules
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          {
				  loader: "css-loader",
				  options: {
				  	modules: {
				  		localIdentName: '[path][name]-[local]-[hash:6]',
				  	},
				  },
          },
          { loader: 'less-loader' },
        ],
      }, // 配置处理.less文件的第三方loader规则
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
				  loader: "css-loader",
				  options: {
				  	modules: {
				  		localIdentName: '[path][name]-[local]-[hash:6]',
				  	},
				  },
          },

          { loader: 'sass-loader' },
        ],
      }, // 配置处理.scss文件的第三方loader规则
      { test: /\.jpg|png|gif|bmp|jpeg$/, use: 'url-loader' },
      { test: /\.ttf|eot|svg|woff|woff2$/, use: 'url-loader' }, // 这里是处理文字文件，同上面同一个处理loader但是不要放在一起
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"], // 默认这几中文件名后缀自动补上，顺序很重要，webpack默认js json可以省略 添加jsx
    alias: {
      '@': path.join(__dirname, '/src'), // 设置@ 符号代表根目录到src的绝对路径
    },
  },
  devServer: {
    historyApiFallback: true, // 防止路由匹配不上出现报错，404
    disableHostCheck: true, // IE中 Invalid Host/Origin header问题

  },
}
