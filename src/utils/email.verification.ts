import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const transporter = nodemailer.createTransport({

    service:'gmail',
    auth:{
        user:process.env.MY_MAIL,
        pass:process.env.MY_PASSWORD
    },
    debug: true
})

export const userVerificationMailGeneration = async(userEmail : string, token: string) => {
    const confirmationToken = token
    const confirmationLink = `${process.env.MAIL_URL}/user/verifyUserEmail/${confirmationToken}`;
    const mailSubject = 'ACCOUNT CONFIRMATION';
    const mailText = `Welcome onboard, Please confirm your account by clicking the link below.\n\n${confirmationLink}`
    
   
    sendMail(userEmail, mailSubject, mailText)
}

export const userForgetPasswordMailGeneration = async(email: string, otp: number) => {
    const mailSubject = 'OTP VERIFICATION';
    const mailText = `Your OTP for reset password is ${otp} and is valid for only for 5 minutes`;
    await sendMail(email,mailSubject,mailText);
    return true;
}


 const sendMail = async(to: string, subject: string, text: string) => {
    try {
        
        await transporter.sendMail({
            from: process.env.MY_MAIL,
            to,
            subject,
            text
        });
        console.log('mail send successfully');
    } catch (error) {
        console.log("error in sending mail", error);
    }
}


