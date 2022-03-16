const apple = 3;
const banana = 2;

console.log("철수는 사과를 "+ apple+"개, "+ "바나나를 "+ banana+ "개 가지고 있습니다.")
//template literal
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`)

function getWelcomeTemplate(user,a, b,c,d ) {
    
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
const myuser = {
    myname : "철수",
    myage: 13,
    myschool: "다람쥐 초등학교",
    mycreatedAt: "2020-01-02"
}
    
getWelcomeTemplate(10, myuser);

//구조분해할당을 통해 간단하게 가능!
// 객체를 구조분해할 땐 객체로 구조분해
const myuser2 = {
    myname : "철수",
    myage: 13,
    myschool: "다람쥐 초등학교",
    mycreatedAt: "2020-01-02"
}
const {name, age, school, createdAt} = myuser2;

// 배열도 구조분해 가능!
const classmates = ["1","2","3"];
const [ch1, ch2, ch3]  =classmates;

//배열은 자유롭게 이름을 변경할 수 있으나 순서의 맞게 사용해야한다.
//객체는 key와 value를 가진 구조이므로 key를 변수로 사용해야한다, 
