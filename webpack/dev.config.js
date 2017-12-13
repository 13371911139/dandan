var path = require("path");
var webpack = require('webpack');
var config=require('./webpack.config');
var HWP=require('html-webpack-plugin');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var WDM=require('webpack-dev-middleware');
var WHM=require('webpack-hot-middleware');

var devConfig={
    devtool:'cheap-module-eval-source-map',
    entry:{
        Index:['webpack-hot-middleware/client','./src/index.js'],
      },
    output: {
        path:path.join(__dirname,'../dist'),
        filename: '[name].js',
        publicPath:'/dist/',
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules', 'web_modules']
    }
}
//let webpackconfig = Object.assign({}, config, devConfig);// console.log(webpackconfig);
module.exports=function(app){
    let webpackconfig = Object.assign({}, config, devConfig);// console.log(webpackconfig);
    webpackconfig.module.loaders=[
        {test: /\.html$/,loader: 'file?name=./build/[name].[ext]'},
            {test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: "style-loader!css-loader!autoprefixer-loader?{browsers:['last 2 version']}"},
            {test: /vendor\/.+\.(jsx|js)$/, loader: 'imports?jQuery=jquery,$=jquery,this=>window'},
            {test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=server/lexiugo/page/react-owner/dist/img/[name].[ext],url-loader?limit=8192'}
        ]

    var compiler = webpack(webpackconfig);// console.log(compiler);
    app.use(WDM(compiler,{
        publicPath: webpackconfig.output.publicPath,
        stats: {
            colors: true,
            chunks: false
        }
    }));
    app.use(WHM(compiler));
    return app;
}