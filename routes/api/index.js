var router = require('express').Router();
const mongoose = require('mongoose');
const url = 'mongodb://172.21.2.236:27017/190110910836'
mongoose.connect(url, { useUnifiedTopology: true,useNewUrlParser:true } );//连接mongodb数据库
var db = mongoose.connection;
db.on('error', console.error.bind(console, '连接错误：'));
db.once('open', (callback) => {
    console.log('MongoDB连接成功！！');
});
router.use('/login',require('./login'));
router.use('/account',require('./account'));
router.use('/chart',require('./chart'));
router.use('/user',require('./user'));

module.exports = router;