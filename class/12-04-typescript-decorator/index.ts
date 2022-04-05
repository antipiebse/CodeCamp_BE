//데코레이터란?
//함수

// yarn add typescript --dev => dev로 저장
// yarn add ts-node => ts를 node에서 실행시키기 위해 설치
function zzz(aaaaa){
    console.log("---")
    console.log(aaaaa)
    console.log("---")
}

@zzz
class AppController {}


//public
class aaa {
    constructor(public mypower){//public은 어디서든 바꿀 수 있다
        this.mypower = mypower
    }
    ggg(){
        console.log("안녕")
    }
}

const AAA = new aaa(50)
AAA.mypower = 5
// private
class bbb {
    constructor(private mypower){//public은 어디서든 바꿀 수 있다
    }
    ggg(){
        this.mypower = 10;
        console.log("안녕")
    }
}
const BBB = new bbb(50)
BBB.mypower = 5 //private를 사용하면 객체 안에서만 사용 가능!


// readonly 안에서 읽기만 가능하고, 값 변경 X
class CCC {
    constructor(readonly mypower){//public은 어디서든 바꿀 수 있다
    }
    ggg(){
        this.mypower = 10;
        console.log("안녕")
    }
}
