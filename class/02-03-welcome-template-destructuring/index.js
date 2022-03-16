// 구조분해할당을 사용하는 이유?
// 코드 길이와 다양한 오류를 줄여준다.


// 자바스크립트 안에는 날짜 객체가 있다!
function getWelcomeTemplate({myname, myage, myschool}) {
    // 여기서 오늘 날짜로 만들기!!
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth()+1).padStart(2,"0");//month는 0부터 시작하여 항상 +1하기
    const dd = String(date.getDate()).padStart(2, "0");
    const createdAt = `${yyyy}-${mm}-${dd}`

    return `
        <html>
            <body>
                <h1>${myname}님 가입을 환영합니다!!</h2>
                <hr>
                <div>이름: ${myname}</div>
                <div>나이: ${myage}</div>
                <div>학교: ${myschool}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `
}

const myuser = {
    myname : "철수",
    myage: 13,
    myschool: "다람쥐 초등학교",
}
    
const result = getWelcomeTemplate(myuser);

console.log(result);
