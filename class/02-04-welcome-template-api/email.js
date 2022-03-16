export function checkValidationEmail(email){
    const db_email = 'a@a.com';
    if (email !== db_email){
        console.log('이메일이 존재하지 않습니다.');
        return false;
    } else if(email.includes('@') === false){
        console.log('이메일 형식이 올바르지 않습니다.');
        return false;
    } else return true;
}

export function getWelcomeTemplate(name, age,school, email, password, createdAt){
    return `
    <html>
    <body>
        <h1>${name}님 가입을 환영합니다!!</h2>
        <hr>
        <div>이름: ${name}</div>
        <div>나이: ${age}</div>
        <div>학교: ${school}</div>
        <div>이메일: ${email}</div>
        <div>비밀번호: ${password}</div>
        <div>가입일: ${createdAt}</div>
    </body>
    </html>
    `
}

export function sendTemplateToEmail(template, email){
    console.log(`${email}이메일로 ${template}를 전송합니다.`);
}

