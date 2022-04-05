import { Injectable } from '@nestjs/common';

@Injectable()
export class StarbucksService {
//   aaa(): string {
//     return 'Hello World!';
//   }

    findAll(){
        // DB에 접속해서 데이터를 꺼내오는 로직
        return [
            {
                number: 1,
                name: "나이트로 바닐라 크림",
                price: "3500",
                kcal: "350",
                saturatedFat: "25",
                protein: "5",
                Na: "12",
                sugars: "25",
                Caffeine: "100"
            },
            {
                number: 2,
                name: "아메리카노",
                price: "2000",
                kcal: "310",
                saturatedFat: "25",
                protein: "5",
                Na: "12",
                sugars: "25",
                Caffeine: "100"
            },
            {
                number: 3,
                name: "바닐라라떼",
                price: "2700",
                kcal: "350",
                saturatedFat: "25",
                protein: "5",
                Na: "12",
                sugars: "25",
                Caffeine: "100"
            },
            {
                number: 4,
                name: "카푸치노",
                price: "3800",
                kcal: "350",
                saturatedFat: "25",
                protein: "5",
                Na: "15",
                sugars: "12",
                Caffeine: "70"
            },
            {
                number: 5,
                name: "카페라떼",
                price: "3500",
                kcal: "350",
                saturatedFat: "28",
                protein: "12",
                Na: "25",
                sugars: "45",
                Caffeine: "88"
            },
           
        ]
    }
    create(){
        // DB에 접속해서 데이터를 등록하는 로직
        return '등록에 성공했습니다.'
    }
}
