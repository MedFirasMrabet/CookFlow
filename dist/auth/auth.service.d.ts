import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from './user/user.schema';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateStuffDto } from './dto/createStuff.dto';
import { UserService } from './user/user.service';
import { MailerService } from 'src/shared/mail-service/mailer.service';
import { ChangePasswordDto } from './dto/changePassword.dto';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    private userService;
    private mailerService;
    constructor(userModel: Model<User>, jwtService: JwtService, userService: UserService, mailerService: MailerService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: AuthCredentialsDto): Promise<any>;
    addStuff(createStuffDto: CreateStuffDto): Promise<any>;
    addAdmin(createStuffDto: CreateStuffDto): Promise<any>;
    findAll(): Promise<User[]>;
    findAllByRestaurent(restaurent: number): Promise<User[]>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<any>;
    sendEmailAddStuff(user: any): Promise<void>;
}
