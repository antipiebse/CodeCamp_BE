import axios from 'axios';
import { GetToday } from './utills.service.js'

export class Email extends GetToday{
    constructor({email, phone, prefer, name, template}) {
        super()
        this.email = email
        this.name = name
        this.template = template
        this.phone = phone
        this.prefer = prefer
        this.getToday  = this.getToday()
    }
    checkValidationEmail(){
        if (this.email===''){
            console.log('이메일이 존재하지 않습니다.');
            return false;
        } else if(this.email.includes('@') === false){
            console.log('이메일 형식이 올바르지 않습니다.');
            return false;
        } else return true;
    }
    getWelcomeTemplate(){
        return `
        <html>
        <body>
            <h2 style="color:red">${this.name}님 가입을 환영합니다!!</h2>
            <hr>
            <div>이름: ${this.name}</div>
            <div>전화번호: ${this.phone}</div>
            <div>좋아하는 사이트: ${this.prefer}</div>
            <div>가입일: ${this.getToday}</div>
        </body>
        </html>
        `
    }
    async sendTemplateToEmail(){
        const appKey = process.env.EMAIL_APP_KEY
        const XSecretKey = process.env.EMAIL_X_SECRET_KEY
        const sender =process.env.EMAIL_SENDER
        const result = await axios.post(
            `https://api-mail.cloud.toast.com/email/v2.0/appKeys/${appKey}/sender/mail`
        ,{
            senderAddress:sender,
            title:`안녕하세요 ${this.name}님, 가입을 환영합니다!`,
            body: this.template,
            receiverList:[
                {
                    receiveMailAddr: this.email,
                    receiveType: "MRT0"
                }
            ]
        },{
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "X-Secret-Key": XSecretKey
            }
        })
        // console.log(`${email}이메일로 ${template}를 전송합니다.`);
    }
    
}
