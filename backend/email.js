const nodemailer = require('nodemailer');
// const secure_configuration = require('./secure');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: "BRAHIMLOUARDI",
    pass: "ALMAS@123",
    // clientId: secure_configuration.CLIENT_ID,
    // clientSecret: secure_configuration.CLIENT_SECRET,
    // refreshToken: secure_configuration.REFRESH_TOKEN
  }
});

const mailConfigurations = {
  from: 'brahimlouardi6@gmail.com',
  to: 'brahim.louardi@usmba.ac.ma.com',
  subject: 'Sending Email using Node.js',
  text: 'Hi! There, You know I am using the NodeJS '
    + 'Code along with NodeMailer to send this email.'
};

transporter.sendMail(mailConfigurations, function (error, info) {
  if (error) throw Error(error);
  console.log('Email Sent Successfully');
  console.log(info);
});

