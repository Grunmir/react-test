var API = require('./api/api.json')
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function(request, response){
    response.send('<p>API para servir preguntas para React-Test</p><a href="localhost:3030/questions">QUESTIONS</a>')
});

app.get('/questions', function (reques, response) {
  response.send(API);
});

app.listen(3030, function () {
  console.log('API Questions Server listening on port 3030!');
});
