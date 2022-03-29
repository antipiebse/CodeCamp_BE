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
import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js'

//스키마
import { Token } from './models/token.model.js'
import { Starbucks } from './models/starbucks.model.js'
import { User } from './models/user.model.js'

// cheerio
import { scrapData } from './scrap.js'

// cors
import cors from 'cors'

// DB
import mongoose from 'mongoose'

const openapiSpecification = swaggerJsdoc(options)

const app = express()
const port = 3000


//json parse
app.use(express.json())
//cors설정
app.use(cors())
//네
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))


//user정보 불러오기
app.get('/users', async (req, res) => {
    res.json(await User.find({}))
})

//스타벅스 커피 목록 조회
app.get('/starbucks', async (req, res) => {
    res.status(200).json(await Starbucks.find({}))
})

// // 회원가입
app.post('/user', async (req, res) => {
    const user = await req.body
    let isPhone = await Token.findOne({ phone: user.phone })
    // 핸드폰 번호가 db에 존재하지 않거나 인증이 완료되지 않았을 경우
    if (!isphone || user.isAuth === false) {
        res.status(422).send('에러!! 핸드폰 번호가 인증되지 않았습니다.')
    } else {
        //og data
        const og = await scrapData(user.prefer)
        const Encpersonal = user.personal.slice(0, 7).padEnd(14, "*")
        //이메일 형식 체크
        const isValid = checkValidationEmail(user.email)
        if (isValid) {
            const template = getWelcomeTemplate(user)
            sendTemplateToEmail(user.name, template, user.email)
        }
        // db에 저장
        const saveUser = new User({
            ...user,
            personal: Encpersonal,
            og: {
                title: og.title,
                description: og.description,
                image: og.image
            }
        })
        await saveUser.save((err, user) => res.json(user._id))
        res.send('회원가입이 완료되었습니다.')
    
    }
})


// 토큰 요청
app.post('/tokens/phone', async (req, res) => {
    let myphone = req.body.phone
    // 1. 핸드폰 자릿수 확인.
    let newtoken = ' '
    let isphone = await Token.findOne({ phone: myphone })
    let result = ''
    const isValid = checkValidationPhone(myphone)
    if (isValid) {
        // 2.핸드폰 토큰 6자리 만들기
        newtoken = getToken()
        // 3. 핸드폰 번호에 토큰 전송하기
        sendTokenToSMS(myphone, newtoken)
        //핸드폰 존재
        if (isphone) {
            await Token.updateOne({ phone: myphone }, { token: newtoken })
            res.json(isphone)
        }//존재 x
        else {
            let token = new Token({
                token: newtoken,
                phone: myphone,
                isAuth: false
            })
            token.save()
            res.json(token)
        }
    }
})

// 인증 완료
app.patch('/tokens/phone', async (req, res) => {
    let { token, phone } = req.body
    
    let isUser= await Token.findOne({ phone })
    //전화번호 존재 x
    if (!isUser) {
        res.send(false)
    }
    // 인증번호가 틀릴 때
    else if (token !== isUser.token) {
        res.send(false)
    }
    //인증완료
    else if (!isUser.isAuth) {
        await Token.updateOne({ phone: isUser.phone }, { isAuth: true })
        res.send(true)
    }
})


//mongodb 접속
mongoose.connect("mongodb://my-database:27017/codecamp")
// backend api server open
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})