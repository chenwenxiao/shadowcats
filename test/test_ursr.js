// var http=require('http');
// http.get('/',function(req,res){
//     res.render()
// });
    var http = require('http');  
    http.createServer(function(request, response){  
        response.writeHead(200,{'Content-Type' : 'text/html'});  
        response.write('hello worlsd!');  
        response.end();  
    }).listen(3000);  