import axios from 'axios';
import { getToday } from './utills.js'

export function checkValidationEmail(email){
    console.log(email)
    if (email===''){
        console.log('이메일이 존재하지 않습니다.');
        return false;
    } else if(email.includes('@') === false){
        console.log('이메일 형식이 올바르지 않습니다.');
        return false;
    } else return true;
}

export function getWelcomeTemplate({name, age,school}){
    return `
    <html>
    <body>
        <h2 style="color:red">${name}님 가입을 환영합니다!!</h2>
        <hr>
        <div>이름: ${name}</div>
        <div>나이: ${age}</div>
        <div>학교: ${school}</div>
        <div>가입일: ${getToday()}</div>
    </body>
    </html>
    `
}

export async function sendTemplateToEmail(template, email){
    const appKey = process.env.EMAIL_APP_KEY
    const XSecretKey = process.env.EMAIL_X_SECRET_KEY
    const sender =process.env.EMAIL_SENDER
    const result = await axios.post(
        `https://api-mail.cloud.toast.com/email/v2.0/appKeys/${appKey}/sender/mail`
    ,{
        senderAddress:sender,
        title:"안녕하세요 철수님, 가입을 환영합니다!",
        body: template,
        receiverList:[
            {
                receiveMailAddr: email,
                receiveType: "MRT0"
            }
        ]
    },{
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "X-Secret-Key": XSecretKey
        }
    })
    console.log(result)
    console.log("전송 완료!!!!")

    // console.log(`${email}이메일로 ${template}를 전송합니다.`);
}

