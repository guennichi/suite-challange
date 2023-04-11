const express= require('express');
const app = express();
const nodemailer = require('nodemailer');
const cron = require('./crons/first-cron');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'guennichi.hanene@gmail.com',
    pass: 'bpyjcaxeiyjhxuzh'
  }
});

var mailOptions = {
  from: 'guennichi.hanene@gmail.com',
  to: 'guennichi.hanene01@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>',
  
};
/*var mailOptions = {
    from: 'guennichi.hanene@gmail.com',
    to: 'guennichi.hanene01@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'hello word',
    
  };*/

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


