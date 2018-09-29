import { Injectable } from '@nestjs/common';

interface UserInfo {
    username: string,
    password: string
}

@Injectable()
export class UserService {
    validateUser(data: UserInfo): boolean {
        return true
    }
}