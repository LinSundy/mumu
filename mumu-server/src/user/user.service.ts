import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {UserDto} from "./user.dto";
import {Model} from 'mongoose';
import {uuid} from "../utils";
import {UserInfo} from "./user.interface";

@Injectable()
export class UserService {
    private readonly userModel: Model<UserInfo>;

    constructor(@InjectModel('users') users) {
        this.userModel = users
    }

    async validateUser(UserDto: UserDto): Promise<any> {
        let username = UserDto.username;
        let res = await this.userModel.find({username});
        if (res.length < 1) {
            return {status: 0};
        }
        let tempPwd = res[0].password;
        if (tempPwd === UserDto.password) {
            return {
                status: 1,
                token: uuid(),
                roles: res[0].roles,
                username: res[0].username
            };
        } else {
            return {status: 2};
        }
    }

    async userinfo(param) {
        let data = await this.userModel.find(param);
        return data;
    }
}