import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { SigninDto } from './dto/signin.dto';

@Controller('auth')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post('signup')
    async signup(@Body() data: UserDto) {
        return this.userService.signup(data);
    }

    @Post('signin')
    async signin(@Body() data: SigninDto) {
        return this.userService.signin(data);
    }
}
