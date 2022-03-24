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

import mongoose from 'mongoose'
import { Token } from './models/token.model.js';


const openapiSpecification = swaggerJsdoc(options);

const app = express()
const port = 3000


//json parse
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

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



//mongodb 접속
mongoose.connect("mongodb://my-database:27017/codecamp")
// backend api server open
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})