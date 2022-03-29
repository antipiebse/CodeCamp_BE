import express from "express"

const app = express()

// 상품구매하기 API
app.post('/products/buy', (req,res)=>{
    // 1. 가진 돈 검증 코드 (대략 10줄)
    // ...
    // ...
    // ...
    // ...
    
    // 2. 판매 여부 검증 코드 (대략 10줄)
    // ...
    // ...
    // ...
    // ...

    // 3. 상품 구매 코드
    // if (돈이 있고 && 판매중){
        res.send('상품 구매 완료!!')    
    // }
})


// 상품환불하기 API
app.post('/products/refund', (req,res)=>{
    // 1. 판매 여부 검증 코드 (대략 10줄)
    // ...
    // ...
    // ...
    // ...

    // 2. 상품 환불 코드
    // if(!판매중){
        res.send('상품 환불 완료!!')
    // }
})

app.listen(3000)
