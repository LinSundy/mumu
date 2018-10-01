import {Post, Controller, Body, Get, HttpCode, Header, Req } from '@nestjs/common';
import {UserDto} from "./user.dto";
import {UserService} from "./user.service";
import {uuid} from "../utils";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @HttpCode(200)
    @Post('login')
    async login(@Body() UserDto: UserDto, @Req() req) {
        let num = await this.userService.validateUser(UserDto);
        if(num === 0) {
            return {
                token: uuid(),
                flag: false,
                msg: '用户不存在'
            }
        } else if (num === 1) {
            req.session.userinfo = UserDto.username;
            return {
                flag: true,
                token: uuid(),
                msg: '用户名密码正确'
            }
        } else {
            return {
                token: uuid(),
                flag: false,
                msg: '用户名密码错误'
            }
        }
    }
}