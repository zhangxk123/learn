module.exports = {
  mode: "",
  context: path.resolve(__dirname, "src"), //默认使用当前目录也就是根目录
  entry: {
    main: "./main.js",
    home: { import: "./contact.js", filename: "pages/[name][ext]" },
    //入口名可以动态改变，根据output.filename
  },
  target: "node", // default web 目标代码环境的配置
  output: {
    // library: 'someLibName', 打包成lib的配置
    // libraryTarget: 'umd',
    path: "",
    filename: "",
    publicPath: "",
  },
  devtool: false,
  //loader
  module: {
    rules: [
      {
        test: "",
        use: [
          {
            loader: "", //style-loader!postcss-loader!css-loader!less-loader  倒序执行
            options: "",
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {}, // 别名
    extensions: [], //模块加载后缀优先级
  },
  optimization: {},
  plugins: [],
  devServer: {
    hotOnly: true, //可以不让其刷新
    historyApiFallback: true, //history mode
  },
  externals: {}, //将依赖文件从产出代码中剔除，适合lib开发
};

// 3种hash
// 那么webpack打包也是如此，生产相应的版本号，具体的hash有三种

// 1、Hash

// hash是跟整个项目的构建相关，只要项目里有文件更改，整个项目构建的hash值都会更改，并且全部文件都共用相同的hash值

// 2、chunkhash

// chunkhash，它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值。

// 简单来说这种是根据不同入口来配置的，比如vue-router、vuex、vue等公共入口文件，只要这些没有改变，那么他对应生成的js的hash值也不会改变。

// 3、contenthash

// contenthash主要是处理关联性，比如一个js文件中引入css，但是会生成一个js文件，一个css文件，但是因为入口是一个，导致他们的hash值也相同，所以当只有js修改时，关联输出的css、img等文件的hash值也会改变，这种情况下就需要contenthash了。
