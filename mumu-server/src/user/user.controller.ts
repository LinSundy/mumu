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
            res.cookie('username', data.username);
            res.cookie('roles', data.roles);
        }
        res.send(data);
    }

    @Get('info/:username')
    async userinfo(@Param() param) {
        let data = await this.userService.userinfo(param);
        return data[0]
    }
}