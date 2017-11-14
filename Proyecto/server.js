var http = require('http');
var fs = require('fs');


http.createServer(function(req, res) {
    
    
        res.write('no es hola')
        res.end();

}
).listen('8080');


