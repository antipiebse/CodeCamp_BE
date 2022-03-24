//express
import express from 'express';
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




const openapiSpecification = swaggerJsdoc(options);

const app = express()
const port = 3000


//restful-api방식
//json parse
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

//게시글 목록보기
// 명세를 잘 작성해야 협업이 좋음.
// 프론트 개발은 명세 부분을 보고함.

app.get('/boards', async (req, res) => {
    //1. 데이터를 조회하는 로직=>DB에 접속해서 데이터 꺼내오기
    const result = await Board.find({writer:"철수"})//    Board.find({writer:"철수"})writer가 철수인 거 모두 찾아오기, .findone: 1명찾기,
    // 2. 꺼내온 결과 응답 주기
    res.send(result);
})

//게시글 등록하기
app.post('/boards', async (req, res) => {
    //1. 데이터를 조회하는 로직=>DB에 접속해서 데이터 저장하기
    // 프론트엔드로부터 데이터 받아오기
    // 콘솔로 찍기
    
    const board = new Board({
        // writer:req.body.writer,
        // title:req.body.title,
        // contents:req.body.contents
        ...req.body
    })
    console.log(board)
    await board.save()
    //2. 저장결과 알려주기!
    res.send('등록 성공!');
})


app.get('/aaa', (req,res)=>{
    let a = new Token({
        token: '12345',
        phone: '123',
        isAuth: false
    })
    a.save() 
    res.send('등록 성공!');
}
)
//token만들기
app.post('/tokens/phone', async (req, res) => {
    let myphone = req.body.phone;
    // 1. 핸드폰 자릿수 확인.
    let newtoken = ' '
    let isphone = await Token.findOne({phone:myphone})

    const isValid = checkValidationPhone(myphone);
    if (isValid === true) {
        // 2.핸드폰 토큰 6자리 만들기
        newtoken = getToken()
        //핸드폰 존재
        if(isphone){
            await Token.updateOne({phone:myphone},{token:newtoken})
        }//존재 x
        else{
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

app.patch('/tokens/phone', async(req,res)=>{
    let token = req.body.token;
    let phone = req.body.phone;
    let DB = await Token.findOne({phone:phone})
    if(DB.phone !== phone){
        res.send(false)
    }else if(token !== DB.token){
        res.send(false)
    }else if(DB.isAuth===false){
        await Token.updateOne({phone:DB.phone},{isAuth:true} )
        res.send(true)
    }
})

app.post('/users', (req, res) => {
    const myuser = req.body.user;

    const isValid = checkValidationEmail(myuser.email)
    if (isValid) {
        const template = getWelcomeTemplate(myuser)

        sendTemplateToEmail(template, myuser.email);
        res.send("가입완료!")
    }
})




// //특정게시글 아이디만 보기
// app.get('/boards/:id', (req, res) => {
//     res.send('Hello World!')
// })

// //게시글 수정하기
// app.put('/boards/:id',(req,res) => {
//     res.send('');
// })

// //게시글 삭제하기
// app.delete('/boards/:id',(req,res) => {
//     res.send('');
// })
//mongodb 접속
mongoose.connect("mongodb://my-database:27017/codecamp")
// backend api server open
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})