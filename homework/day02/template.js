function getWelcomeTemplate({email, residentRegistrationNumber, phone, url}){
    return `
    <html>
    <body>
        <h1>${email.split('@')[0]}님 회원가입을 축하합니다!</h1>
        <hr>
        <div>이메일: ${email}</div>
        <div>주민번호: ${residentRegistrationNumber}</div>
        <div>휴대폰 번호: ${phone}</div>
        <div>내가 좋아하는 사이트: ${url}</div>
    </body>
    </html>
    `
}

const temp = {
    email: "aaaa@a.com",
    residentRegistrationNumber:"981123-1234568",
    phone:"010-1234-5678",
    url:"https://developer.mozilla.org/ko/"
}

const result = getWelcomeTemplate(temp);
console.log(result);