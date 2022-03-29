//express
import express from 'express'
//express swagger
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
//.env라이브러리
import dotenv from 'dotenv'
dotenv.config()

// API
import { checkValidationPhone, sendTokenToSMS, getToken } from './phone.js'

//스키마
import { Token } from './models/token.model.js'
import { Starbucks } from './models/starbucks.model.js'

// cors
import cors from 'cors'

// DB
import mongoose from 'mongoose'

// controller
import { UserController } from './controllers/user.controller.js'


const openapiSpecification = swaggerJsdoc(options)

const app = express()
const port = 3000


//json parse
app.use(express.json())
//cors설정
app.use(cors())
//네
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))

const userController = new UserController()

//user정보 불러오기
app.get('/users', userController.getUser)
// 회원가입
app.post('/user', userController.addUser)

//스타벅스 커피 목록 조회
app.get('/starbucks', async (req, res) => {
    res.status(200).json(await Starbucks.find({}))
})

// 토큰 요청
app.post('/tokens/phone', async (req, res) => {
    let myphone = req.body.phone
    // 1. 핸드폰 자릿수 확인.
    let newtoken = ' '
    let isphone = await Token.findOne({ phone: myphone })

    const isValid = checkValidationPhone(myphone)
    if (isValid === true) {
        // 2.핸드폰 토큰 6자리 만들기
        newtoken = getToken()
        //핸드폰 존재
        if (isphone) {
            await Token.updateOne({ phone: myphone }, { token: newtoken })
        }//존재 x
        else {
            let token = new Token({
                token: newtoken,
                phone: myphone,
                isAuth: false
            })
            token.save()
        }
        // 3. 핸드폰 번호에 토큰 전송하기
        sendTokenToSMS(myphone, newtoken)
        res.json(newtoken)
    }
})

// 인증 완료
app.patch('/tokens/phone', async (req, res) => {
    let { token, phone } = req.body
    let DB = await Token.findOne({ phone: phone })
    //전화번호 존재 x
    if (DB.phone !== phone) {
        res.send(false)
    }
    // 인증번호가 틀릴 때
    else if (token !== DB.token) {
        res.send(false)
    }
    //인증완료
    else if (DB.isAuth === false) {
        await Token.updateOne({ phone: DB.phone }, { isAuth: true })
        res.send(true)
    }
})


//mongodb 접속
mongoose.connect("mongodb://my-database:27017/codecamp")
// backend api server open
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})