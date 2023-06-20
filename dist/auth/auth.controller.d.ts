import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateStuffDto } from './dto/createStuff.dto';
import { User } from './user/user.schema';
import { ChangePasswordDto } from './dto/changePassword.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(authCredentialsDto: AuthCredentialsDto): Promise<any>;
    addAdmin(createStuffDto: CreateStuffDto): Promise<User>;
    addStuff(createStuffDto: CreateStuffDto): Promise<User>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<User>;
    findAll(): Promise<any>;
    findAllByRestaurent(restaurentId: number): Promise<any>;
    test(): string;
}
