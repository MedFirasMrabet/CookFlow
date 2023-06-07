// auth/auth.controller.ts

import { Body, Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { Roles } from './guards/roles.decorator';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateStuffDto } from './dto/createStuff.dto';
import { User } from './user/user.schema';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'; // Import the ApiTags decorator
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UserRole } from './enum/role.enum';


ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    //@UseGuards(AuthGuard('local'))
    async login(@Body() authCredentialsDto: AuthCredentialsDto): Promise<any> {
        return await this.authService.login(authCredentialsDto);
    }

    @Post('addStuff')
    @UseGuards(JwtAuthGuard)
    @Roles(UserRole.Chef)
    @ApiBearerAuth()
    async addStuff(@Body() createStuffDto: CreateStuffDto): Promise<User> {
        return await this.authService.addStuff(createStuffDto);
    }
    @Get('findAll')
    async findAll(): Promise<any> {
        return await this.authService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Roles(UserRole.Chef)
    @Post('/test')
    test(): string {
        return 'Only admin users can see this';
    }
}
