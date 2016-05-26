var http = require('http');
var express = require('express');
var app = {};

var e = app.e = express();
app.server = app.server = http.createServer(e);

e.use(express.static(__dirname + '/public'));

app.server.listen(7050, function() {
	console.log('Listening on port ' + app.e.get('port') + '\n');
});
