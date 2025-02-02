import nodemailer from 'nodemailer'

const sendEmail = async (options) => {
    const transport = nodemailer.createTransport({
        host:process.env.SMPT_HOST,
        port:process.env.SMTP_PORT,
        auth:{
            username:process.env.SMTP_EMAIL,
            pass:process.env.SMTP_PASSWORD,
        },
    });
    const message = {
        from:`${process.env.SMT_FROM_NAME}<${process.loadEnvFile.SMTP_FROM_EEMAIL}>`,
        to:options.sendEmail,
        subject:options.subject,
        html:options.message,
    };

    await transport.sendMail(message);
};
export default sendEmail;