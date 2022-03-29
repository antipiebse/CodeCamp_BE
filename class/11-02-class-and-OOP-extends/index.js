//상속받기!
// 부모 객체에서 자식클래스에게 상속!
class SkyUnit{
    run(){
        console.log("날라서 도망가자")
    }
}


class GroundUnit{
    unit = "123"
    constructor(qqq){
        
    }
    run(){
        console.log("뛰어서 도망가자")
    }
}

// extends 문법을 통해 GroundUnit으로 부터 상속받음!!
class Monster extends GroundUnit {
    power = 10

    constructor(aaa){
        // grondunit 객체에 값을 넣는 방법
        super()
    }
    
    attack(){
        console.log("공격하자!!!")
        console.log(`내 공격력은 ${this.power}이야`)
    }
}

const mymonster1 = new Monster(10)
mymonster1.attack()
mymonster1.run()