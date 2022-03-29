import { User } from '../../models/user.model.js'


export class IsUser{
    findUser = async() => {
        await User.find({})
    }
}