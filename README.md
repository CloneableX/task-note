# task-note
note task everyday

### Installation

Use [`npm`] install dependencies and make app run.

```sh
npm install
npm run start
```

This app can send Email, so you should set configuration by your email info before using it.
You can set configuration in [emailUtil.js](https://github.com/CloneableX/task-note/tree/master/src/emailUtil.js)

```javascript
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
```

### Resources

- [nodejs](https://nodejs.org/zh-cn/) && [javascript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)-**you also should learning**
- [Electron](https://electronjs.org/)-**the base of app**
- [nodemailer](https://nodemailer.com/about/)-**send email by it** 📧