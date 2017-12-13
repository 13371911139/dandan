var path = require("path");
var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


var config = {
    entry:{
        loveCarRepair:['./loveCarRepair/src/js/index.js'],
        lexiuApp:['./lexiuApp/src/js/app.js'],
        reportStatistics:['./reportStatistics/src/js/index.js'],
        newBuild:['./newBuild/src/js/index.js'],
        repairState:['./repairState/src/js/index.js'],
        accessories:['./pc/Accessories/index.js'],
        repairPlant:['./pc/repairPlant/index.js'],
        xlcMap:['./pc/xlcMap/index.js'],
    },
    alias:{
        Edition:'你好'
    },
    output: {
        path:path.join(__dirname,'../../project/yunxian/dist'),
        filename: '[name].js',
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({ // js、css都会压缩
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module', '_']
            },
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        }),
    ],
    module: {
        loaders: [
            {test: /\.html$/,loader: 'file?name=./build/[name].[ext]'},
            {test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: "style-loader!css-loader!autoprefixer-loader?{browsers:['last 2 version']}"},
            {test: /vendor\/.+\.(jsx|js)$/, loader: 'imports?jQuery=jquery,$=jquery,this=>window'},
            {test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=/server/lexiugo/page/react-owner/dist/img/[name].[ext],url-loader?limit=8192'}
        ],
        resolve: {
            extensions: ['', '.js', '.jsx'],
            modulesDirectories: ['node_modules', 'web_modules']
        }
    }
}
module.exports=config;