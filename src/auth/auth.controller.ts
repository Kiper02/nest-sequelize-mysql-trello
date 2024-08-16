import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';


@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @UsePipes(ValidationPipe)
    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @UsePipes(ValidationPipe)
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }
}
