import {Post, Controller, Body, Get} from '@nestjs/common';
import {UserDto} from "./user.dto";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get('test')
    test(): UserDto[] {
        return [{username: 'chelin', password: 'cl123456'}, {username: 'weidepan', password: 'wdp123456'}]
    }
}