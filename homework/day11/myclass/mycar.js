class MyCar {
    constructor(Model, Power, Color){
        this.carModel = Model
        this.carPower = Power
        this.carColor = Color
    }
    StartCar(){
        console.log(`차종: ${this.carModel} || 컬러: ${this.carColor} || 마력: ${this.carPower} 출발`)
    }
    StopCar(){
        console.log(`차종: ${this.carModel} || 컬러: ${this.carColor} || 마력: ${this.carPower} 정지`)
    }
}

const carModel = "BMW"
const carPower = 1500
const carColor = "red"

let a = new MyCar(carModel,carPower,carColor)
a.StartCar()
a.StopCar()