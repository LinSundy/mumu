import {Post, Controller, Body, Get, HttpCode, Header, Req, Param, Res} from '@nestjs/common';
import {UserDto} from "./user.dto";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() UserDto: UserDto, @Req() req, @Res() res) {
        let data = await this.userService.validateUser(UserDto);
        if(data.status === 1) {
            req.session.username = data.username;
        }
        res.send(data);
    }

    @Get('info')
    async userinfo(@Req() req) {
        const username = req.session.username;
        let data = await this.userService.userinfo({username});
        return data[0]
    }

    @Get('logout')
    logout(@Req() req, @Res() res) {
        delete req.session.username;
        res.clearCookie('Admin-Token');
        res.send({logout: true});
    }
}