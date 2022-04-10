//Importing Nodemailer module
var nodemailer = require('nodemailer');
//Importing prompt module to request inputs
const prompt = require("prompt-sync")({ sigint: true });

var email = prompt('Please enter your gmail: ');
var password = prompt('Please enter your gmail password: ');

var transponder = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:email,
        pass: password
    }
});

var mailOptions = {
    from : email,
    to: email,
    subject:'From Node',
    text:'Sending email from Nodemailer'
    //to Send Html mail - use html property instead of text
    //html:'<h2>Sample html</h2>
};

transponder.sendMail(mailOptions,function(err,info){
    if(err) throw err;
    console.log('mail sent')
});