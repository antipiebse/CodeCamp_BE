//express
import express from 'express'
//modules
import { checkValidationPhone, sendTokenToSMS, getToken } from './phone.js'
//express swagger
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
//.env라이브러리
import dotenv from 'dotenv'
dotenv.config()
import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js'
import mongoose from 'mongoose'
import { Token } from './models/token.model.js';
import { Starbucks } from './models/starbucks.model.js';
import { User } from './models/user.model.js';
import createBoardAPI from './cheer.js'
import axios from "axios";


const openapiSpecification = swaggerJsdoc(options);

const app = express()
const port = 3000


//json parse
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));


app.get('/users',  (req, res) => {
    // const user = req.body;
    // const targetURL = await axios.get(user.prefer)

    // // 2. OG골라내기
    // const $ = cheerio.load(user)
    // $("meta").each((_, el) => {
    //     if (!$(el).attr('property')) return
    //         console.log($(el).attr('property').split(':')[1])
    //         console.log($(el).attr('content'))
    //         console.log('======================')                
    //         // const title = $(el).attr('property').split(":")[1]
    //         // const description = $(el).attr('content')

    // })
    
    const frontendData = {
        title: ":안녕하세요",
        contents: "여기 정말 좋은 거 같아요! 한번 꼭 놀러오세요! 여기는 https://www.naver.com 이에요!!"
    }
    createBoardAPI(frontendData);
})


// // 회원가입
// app.post('/user', async (req, res) => {
//     const user = req.body;
//     let isPhone = await Token.findOne({ phone: user.phone })
//     if (!isphone|| user.isAuth === false) {
//         res.status(422).send('에러!! 핸드폰 번호가 인증되지 않았습니다.')
//     }
//     // //번호 존재할 때 좋아하는 사이트 스크랩
//     else {
//         // 스크랩할 URL로 요청하기
//         const targetURL = await axios.get(user.prefer)

//         // 2. OG골라내기
//         const $ = cheerio.load(scrap.data)
//         $("meta").each((_, el) => {
//             if (!$(el).attr('property')) return
//                 console.log($(el).attr('property').split(':')[1])
//                 console.log($(el).attr('content'))
//                 console.log('======================')                
//                 const title = $(el).attr('property').split(":")[1]
//                 const description = $(el).attr('content')
//                 console.log(title)
//                 console.log(description);
//         })
//     }
// }





//     const isValid = checkValidationEmail(user.email)
// if (isValid) {
//     const template = getWelcomeTemplate(user)

//     sendTemplateToEmail(template, user.email);
//     res.send("가입완료!")
// }
// })

// 토큰 요청
app.post('/tokens/phone', async (req, res) => {
    let myphone = req.body.phone;
    // 1. 핸드폰 자릿수 확인.
    let newtoken = ' '
    let isphone = await Token.findOne({ phone: myphone })

    const isValid = checkValidationPhone(myphone);
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
        res.send('인증완료!!');
    }

})

// 인증 완료
app.patch('/tokens/phone', async (req, res) => {
    let { token, phone } = req.body;
    let DB = await Token.findOne({ phone: phone })
    if (DB.phone !== phone) {
        res.send(false)
    } else if (token !== DB.token) {
        res.send(false)
    } else if (DB.isAuth === false) {
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