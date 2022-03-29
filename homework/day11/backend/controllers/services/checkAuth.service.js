import { Token } from '../../models/token.model.js'

export class CheckAuth{
    constructor(phone) {
        this.phone  = phone
    }
    async findPhone(){
        await Token.findOne({ phone:this.phone })
    }
}