const CustomError = require('./custom-error');
const nodemailer = require ('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'ramiro.payco@gmail.com',
        pass:'payco.1234'
    }
});

const mailOptions =(email,token,amount)=> {
    return ({
    from : 'ramiro.payco@gmail.com',
    to: email,
    subject: 'Authenticate paymemnt token',
    text:'Su pago  por --'+amount+'-- lo puede validar con el siguiente token: '+token
    });
}

const sendMail = (email,token,amount)=>{
    transporter.sendMail(mailOptions(email,token,amount),(err,info)=>{
        if(err){
            throw new CustomError(500,err.message); 
        }
    });
}

module.exports= {
    sendMail
}