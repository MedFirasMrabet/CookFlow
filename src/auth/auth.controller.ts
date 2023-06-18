// auth/auth.controller.ts

import { Body, Controller, Post, Get, UseGuards, Request, Param } from '@nestjs/common';
import { Roles } from './guards/roles.decorator';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateStuffDto } from './dto/createStuff.dto';
import { User } from './user/user.schema';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger'; // Import the ApiTags decorator
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UserRole } from './enum/role.enum';
import { ChangePasswordDto } from './dto/changePassword.dto';


ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    //@UseGuards(AuthGuard('local'))
    async login(@Body() authCredentialsDto: AuthCredentialsDto): Promise<any> {
        return await this.authService.login(authCredentialsDto);
    }

    @Post('addAdmin')
    // @UseGuards(JwtAuthGuard)
    // @Roles(UserRole.Admin)
    // @ApiBearerAuth()
    async addAdmin(@Body() createStuffDto: CreateStuffDto): Promise<User> {
        return await this.authService.addAdmin(createStuffDto);
    }

    @Post('addStuff')
    // @UseGuards(JwtAuthGuard)
    // @Roles(UserRole.Chef)
    // @ApiBearerAuth()
    async addStuff(@Body() createStuffDto: CreateStuffDto): Promise<User> {
        console.log(createStuffDto, 'createStuffDto');

        return await this.authService.addStuff(createStuffDto);
    }

    @Post('changePassword')
    @UseGuards(JwtAuthGuard)
    @Roles(UserRole.Chef || UserRole.SousChef || UserRole.Cook)
    @ApiBearerAuth()
    async changePassword(@Body() changePasswordDto: ChangePasswordDto): Promise<User> {
        return await this.authService.changePassword(changePasswordDto);
    }
    @Get('findAll')
    async findAll(): Promise<any> {
        return await this.authService.findAll();
    }

    @Get('findAllByRestaurent/:restaurentId')
    @ApiParam({ name: 'restaurentId', required: true })

    async findAllByRestaurent(@Param() restaurentId: number): Promise<any> {
        console.log(restaurentId);
        return await this.authService.findAllByRestaurent(restaurentId['restaurentId']);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(UserRole.Chef)
    @Post('/test')
    test(): string {
        return 'Only admin users can see this';
    }
}
