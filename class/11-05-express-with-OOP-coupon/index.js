import express from "express"
import { ProductController } from "./mvc/controllers/product.controller.js"
import { CouponController } from "./mvc/controllers/coupon.controller.js"
const app = express()

// 상품 API
const productController = new ProductController()
app.post('/products/buy', productController.buyProduct)// 상품구매하기 API
app.post('/products/refund',productController.refundProduct)// 상품환불하기 API


// 상품권(쿠폰) API
const couponController = new CouponController()
app.post('/coupons/buy', couponController.buyCoupon )// 상품권 구매하기 API


// api를 class로 묶으면 controller라함.
app.listen(3000)



// m => db
// v => frontend
// c => api(backend)
// 라고 생각
// js에서 거짓
// 0 '' false null undefined NaN