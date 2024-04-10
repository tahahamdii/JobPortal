const nodemailer = require('nodemailer');


module.exports = async (email , subject , text) => {
    try
    {
        const transporter = nodemailer.createTransport({
            host:process.env.HOST,
            service:process.env.SERIVCE,
            post:Number(process.env.EMAIL_PORT),
            secure:Boolean(process.env.SECURE),
            auth : {
                user: process.env.USER,
                pass: process.env.PAS
            }
        })
    } catch (error) {

    }
}