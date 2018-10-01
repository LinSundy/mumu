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

    async validateUser(UserDto: UserDto): Promise<number> {
        let username = UserDto.username;
        let res = await this.userModel.find({username});
        if (res.length < 1) {
            return 0;
        }
        let tempPwd = res[0].password;
        if (tempPwd === UserDto.password) {
            return 1;
        } else {
            return 2;
        }
    }
}