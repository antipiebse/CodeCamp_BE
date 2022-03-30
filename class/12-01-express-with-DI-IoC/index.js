import express from "express"
import { ProductController } from "./mvc/controllers/product.controller.js"
import { CouponController } from "./mvc/controllers/coupon.controller.js"
import { ProductService } from "./mvc/controllers/services/product.service.js"
import { CashService } from "./mvc/controllers/services/cash.service.js"
import { PointService }from './mvc/controllers/services/point.service.js'

const app = express()

const cashService = new CashService() // new 한번으로 모든 곳에서 재사용 가능(싱글톤 패턴)
const productService = new ProductService()
const pointService = new PointService() //의존tjd 주입 DI, Inversion of Controll, Inversion 
// 상품 API
const productController = new ProductController(cashService, productService)
app.post('/products/buy', productController.buyProduct)// 상품구매하기 API
app.post('/products/refund',productController.refundProduct)// 상품환불하기 API

// 상품권(쿠폰) API
const couponController = new CouponController(pointService)
app.post('/coupons/buy', couponController.buyCoupon() )// 상품권 구매하기 API


// api를 class로 묶으면 controller라함.
app.listen(3000)





// m => db
// v => frontend
// c => api(backend)
// 라고 생각
// js에서 거짓
// 0 '' false null undefined NaN