import {Post, Controller, Body, Get, HttpCode} from '@nestjs/common';
import {UserDto} from "./user.dto";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @HttpCode(200)
    @Post('login')
    login(@Body() UserDto: UserDto) {
        return this.userService.validateUser(UserDto)
    }
}