var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport')

var transport = nodemailer.createTransport(smtpTransport({
	
	host: 'smtp.126.com',
 	secureConnection: true,
	post: 25,
	auth:{
		user: 'mfhraven@126.com',
		pass: 'ABCDabcd88066256'
	}
}));

var mailOptions = {
	from: 'mfhraven@126.com',
	to : '331479654@qq.com',
	subject: 'Hello',
	text: 'Hello world',
	html: '<b>Hello world </b>'
};

console.log('Here');

transport.sendMail(mailOptions, function(err, info){
	if (err){
		console.log(err);
	}else{
		console.log('Message sent:' + info.response);
	}
});
