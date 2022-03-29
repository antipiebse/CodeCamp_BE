import express from "express"
import { CashService } from "./cash.js"
import { ProductService } from "./product.js"
const app = express()

// 상품구매하기 API
app.post('/products/buy', (req, res) => {
    // 1. 가진 돈 검증하는 코드(10줄 => 2줄)
    const cashService = new CashService()
    const hasMoney = cashService.checkValue()//true 또는 false 리턴

    // 2. 판매 여부 검증(10 => 2)
    const productService = new ProductService()
    const isSoldout = productService.checkSoldout() //true 또는 false 리턴


    // 3. 상품 구매 코드
    if (hasMoney && !isSoldout) {
        res.send('상품 구매 완료!!')
    }
})


// 상품환불하기 API
app.post('/products/refund', (req, res) => {
    // 1 . 판매 여부 검증(10 => 2)
    const productService = new ProductService()
    const isSoldout = productService.checkSoldout() //true 또는 false 리턴


    // 2. 상품 환불 코드
    if(!isSoldout){
        res.send('상품 환불 완료!!')
    }
})


app.listen(3000)
