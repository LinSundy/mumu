import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {UserDto} from "./user.dto";
import {Model} from 'mongoose';

@Injectable()
export class UserService {
    private readonly userModel: Model<UserDto>;

    constructor(@InjectModel('users') users) {
        this.userModel = users
    }

    async validateUser(UserDto: UserDto): Promise<object> {
        let username = UserDto.username;
        let res = await this.userModel.find({username});
        if (res.length < 1) {
            return {
                flag: false,
                msg: '用户名不存在'
            }
        }
        let tempPwd = res[0].password;
        if (tempPwd === UserDto.password) {
            return {
                flag: true,
                msg: '用户名密码正确'
            }
        } else {
            return {
                flag: false,
                msg: '用户名密码不正确'
            }
        }
    }
}