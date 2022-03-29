const aaa = new Date()
console.log(aaa.getFullYear())
console.log(aaa.getMonth() + 1)

class Monster {
    //메소드 뿐만 아니라 변수도 선언 가능!
    power = 10

    //생성자 만들기
    constructor(aaa){
        this.power = aaa
    }
    
    // 공격하는 메소드
    attack(){
        console.log('공격하자')
        //이때 this는 power를 말함! 즉, 클래스 안에서 변수나 메소드를 이용할 땐 this를 사용해야 함.
        console.log(`내 공격력은 ${this.power}이야!!!`)
    }
    
    run(){
        console.log('도망가자')
    }

}
const mymonster1 = new Monster()

mymonster1.attack()
mymonster1.run()


//함수처럼 값을 넣을 수 있는데 이를 constructor로 이용할 수 있다.
const mymonster2 = new Monster(50)

mymonster2.attack()
mymonster2.run()



// 이러한 객체를 api로 만드는 방법?
// 특정 기능을 가진 함수들을 모아둔다.
const loginService = new LoginService()

loginService.login()
loginService.logout()
loginService.loginChec()