var express = require('express');
var router = express.Router();
var http = require('http');

router.get('/', function (req, res, next){
  var queryValue = req.query.items;
  var requestOpt = {
    host : 'ijapi1.wolaidai.com',
    path : '/jrocket2/api/v2/config_datas',
    method: 'GET'
  };
  if (queryValue){
  	requestOpt.path += '?items='+queryValue;
  }
  var data = '';
  var reqGet = http.request(requestOpt, function (response){
    response.on('data', function (d) {
      data += d;
    });
    response.on('end', function (){
      res.set({
        'Content-Type':'application/json;charset=UTF-8'
      });
      res.status(200).send(data);
      res.end();
    });
  });
  reqGet.end();
  reqGet.on('error', function (e){
    console.error(e);
  });
});

/* GET users listing. */
// router.get('/', function (req, res, next) {
  
// });

module.exports = router;