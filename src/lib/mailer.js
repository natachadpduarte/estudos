const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "792c2b1e10906d",
      pass: "c8f4efffb700a3"
    }
  })

  