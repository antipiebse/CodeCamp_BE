// ts는 타입을 추론하는 기능이 있어 타입을 명시하지 않아도 오류를 알려준다.
let aaa = "안녕하세요."
aaa = 3

// 타입 명시
let bbb: string = "반갑습니다."
bbb = 10

// 문자 타입
let ccc: string
ccc = "반가워요"
ccc = 3

// 숫자 타입
let ddd: number
ddd = "afdsfasd"

// 불린 타입
let eee: boolean
eee = false
eee = "false" //true로 작동함, 문자열 안에 값이 있기 때문!

// 배열 타입
let fff: number[] = [1, 2, 3, "안뇽"]
let ggg: string[] = ["철수", "영희", "훈이", 13]
let hhh: (number | string)[] = [1, 2, 3, "안뇽"]

// 객체 타입(자동으로 타입 추론이 되지만 명시를 해주는 것이 좋다.)
//미리 명시하지 않은 값들은 추가할 수 없다.
interface IProfile {
    name: string
    age: number | string
    school: string
    hobby?: string //'?'를 사용하면 지금은 없지만 나중에 생길 수도 있다!
}

let profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교"
}

profile.age = "8살"
profile.school = 123
profile.hobby = "축구"

// 함수 타입(타입 추론 안 되서 any로 정해짐)                //return type
const add = (money1: number, money2: number, unit:string): string => {
    return money1 + money2 + unit
}
add(1000, 2000, "원")