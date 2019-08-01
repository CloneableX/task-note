const moment = require("moment");
const nodemailer = require("nodemailer");

const emailConf = {
    transport: {
        host: "smtp.qq.com", // smtp host server
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'username', // generated ethereal user
          pass: 'password' // generated ethereal password
        }
    },
    fromAddr: 'sender address', // sender address
    toAddr: 'receivers', // list of receivers
}

async function sendEmail(fromUsername, emailContent) {
    "use strict";
    console.log('send email start')
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(emailConf.transport);
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: ' "' + fromUsername + '" <' + emailConf.fromAddr + '>', // sender address
      to: emailConf.toAddr, // list of receivers
      subject: fromUsername + "-" + moment().format('YYYY/MM/DD') + "-日报", // Subject line
      // text: emailContent, // plain text body
      html: emailContent// html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}