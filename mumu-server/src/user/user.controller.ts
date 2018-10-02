import {Post, Controller, Body, Get, HttpCode, Header, Req, Response } from '@nestjs/common';
import {UserDto} from "./user.dto";
import {UserService} from "./user.service";
import {uuid} from "../utils";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get('/chelin')
    hello(@Req() req): string {
        console.log(req.session, '第二次访问');
        return 'hello world'
    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() UserDto: UserDto, @Req() req, @Response() res) {
        let num = await this.userService.validateUser(UserDto);
        if(num === 0) {
            return {
                token: uuid(),
                flag: false,
                msg: '用户不存在'
            }
        } else if (num === 1) {
            req.session.userinfo = {
                username: UserDto.username,
                roles: ['大总管']
            };
            console.log(req, 'req的信息');
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