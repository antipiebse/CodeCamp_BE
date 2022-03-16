const apple = 3;
const banana = 2;

console.log("철수는 사과를 "+ apple+"개, "+ "바나나를 "+ banana+ "개 가지고 있습니다.")
//template literal
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`)

function getWelcomeTemplate(name, age, school, createdAt) {
    
    // isChecked, hasApple등 이러한 형식으로 사용하면 boolean타입
    
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!</h2>
                <hr>
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `
}
const Myname = "철수"
const Myage = 13
const Myschool = "다람쥐초등학교"
const MycreatedAt = '2020-01-02'//날짜 타입
    
getWelcomeTemplate(Myname, Myage, Myschool, MycreatedAt);