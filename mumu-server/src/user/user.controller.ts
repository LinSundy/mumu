import {Post, Controller, Body, Get, HttpCode, Header, Req, Response} from '@nestjs/common';
import {UserDto} from "./user.dto";
import {UserService} from "./user.service";
import {uuid} from "../utils";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get('/chelin')
    hello(@Req() req): any {
        console.log(req.session.userinfo, '第二次访问');
        return "hello"
    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() UserDto: UserDto, @Req() req, @Response() res) {
        let num = await this.userService.validateUser(UserDto);
        if (num === 0) {
            res.send({
                token: uuid(),
                flag: false,
                msg: '用户不存在'
            });
        } else if (num === 1) {
            req.session.userinfo = {
                username: UserDto.username,
                roles: ['大总管']
            };
            // console.log(req, 'req的信息');
            res.send({
                flag: true,
                token: uuid(),
                msg: '用户名密码正确'
            })
        } else {
            res.send({
                token: uuid(),
                flag: false,
                msg: '用户名密码错误'
            });
        }
    }
}