import { Og } from './services/og.service.js'
import { EncPersonal } from './services/EncPersonal.service.js'
import { Email } from './services/email.service.js'
import { IsUser } from './services/user.service.js'
import { CheckAuth } from './services/checkAuth.service.js'
import { User } from '../models/user.model.js'

export class UserController {
    getUser = (req, res)=> {
        const isUser = new IsUser()
        res.json(isUser.findUser())
    }
    
    addUser = async (req, res) =>{
        const user =  await req.body
        const findPhone = new CheckAuth(user.phone)
        const isPhone = findPhone.findPhone()
        // 핸드폰 번호가 db에 존재하지 않거나 인증이 완료되지 않았을 경우
        if (!isPhone || user.isAuth === false) {
            res.status(422).send('에러!! 핸드폰 번호가 인증되지 않았습니다.')
        } else {
            // 주민 번호 암호화
            const encpersonal = new EncPersonal(user.personal)
            //이메일 형식 체크
            const checkEmail = new Email({...user})
            const isValid = checkEmail.checkValidationEmail()
            if (isValid) {
                const template = checkEmail.getWelcomeTemplate()
                checkEmail.sendTemplateToEmail()
            }
            //og data
            const og = new Og(user.prefer)
            const {title, description, image} = og.scrapData()
            // db에 저장
            const toDBUser = new User({
                ...user,
                personal: encpersonal.encPersonal(),
                og: {
                    title,
                    description,
                    image
                }
            })
            //유저 정보 db에 저장
            await toDBUser.save((err, user) => res.json(user._id))
        }
    }
}