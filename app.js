var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function(req, res){

request('http://www.byguitar.com/html', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     // console.log(body)
    
  $ = cheerio.load(body);

  
  res.json({
    'class':$('.brown').text()
        // 'class':$.text()
  });

 // res.send("hello world")
//   }
});
// res.send("hello world")
});


app.listen(3000);