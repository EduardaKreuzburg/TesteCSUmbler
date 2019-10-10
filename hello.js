var express = require('express');
var app = express();

app.get('/', function (req, res){
    var date = new Date();
    var horas = date.getHours();
    var minutos = date.getMinutes();
    var segundos = date.getSeconds();

    res.send('<h3>Hello World</h3>'+ horas + ':' + minutos + ':' + segundos);

});

app.listen(3000, function(){
    console.log('funcionando');
});