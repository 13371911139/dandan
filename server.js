var express = require('express');
var path =require('path');
var swig = require('swig');
var http = require('http');
var bodyParser = require('body-parser');
var superagent = require('superagent');
var proxy = require('http-proxy-middleware');
var app=express();
var router = express.Router();
app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/');
app.use('/dist', express.static('dist'));

if(process.env.NODE_ENV ==='dev'){
    let webpackconfig = require('./webpack/dev.config');
    webpackconfig(app)
    global.ripath='/dist/';
}else{
    global.ripath='/dist/';
}




app.get('/',(req,res,next)=>{
    var dataList={
        path:ripath+(req.query.action || 'Index'),
        title:'丹丹的作品集'
    }
    res.render('index',{dataList:dataList});
});

app.listen(8099,()=>{
    console.log('local:localhost:８０99');
});