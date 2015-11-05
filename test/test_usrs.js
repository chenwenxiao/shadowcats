var http = require('http');
var fs = require('fs');
var content;
function handle_request(req,res){
	res.write(content);	
	res.end();
}
fs.readFile('../views/usrs.jade','utf-8',function(err,data){
	if(err) throw err;
	content=data;
	var server = http.createServer(handle_request);
	server.listen(3000);
});