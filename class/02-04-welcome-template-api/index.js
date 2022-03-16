import {checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail} from './email.js'
import {getToday} from './utills.js'

function createUser({name, age,school, email, password}) {
    // 1. 이메일이 정상인지 확인(1-이메일의 존재여부,2-@의 포함여부)
    const isValid = checkValidationEmail(email)
    if (isValid){
        // 2. 가입환영 템플릿 생성
        const template = getWelcomeTemplate(name, age,school, email, password, getToday())
        
        // 3. 이메일에 가입환영 템플릿 전송하기
        sendTemplateToEmail(template, email);
    }
    // 4. 퍼사드 패턴으로 분리
}

const myuser = {
    name:"철수",
    age:8,
    school:"다람쥐초등학교",
    email: "a@a.com",
    password: "1234"
}

createUser(myuser)
