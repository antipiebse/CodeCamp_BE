import { CashService } from "./services/cash.service.js"
export class CouponController {
    constructor(moneyService){
        this.moneyService = moneyService
    }
    
    buyCoupon(req, res) {
        // 1. 가진돈 검증하는 코드(10줄 => 2줄)
        const hasMoney = this.moneyService.checkValue() // true 또는 false
    
        // 2. 쿠폰 구매하는 코드
        if(hasMoney) {
            res.send('쿠폰을 구매합니다.')
        }
    }

}