// auth/auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './user/user.schema';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateStuffDto } from './dto/createStuff.dto';
import { UserService } from './user/user.service';
import { MailerService } from 'src/shared/mail-service/mailer.service';
import { ChangePasswordDto } from './dto/changePassword.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
    private userService: UserService,
    private mailerService: MailerService
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email }).select('+password');
    if (user && (await bcrypt.compare(password, user.password))) {
      return user.toObject({ versionKey: false, getters: true });
    }
    throw new UnauthorizedException();
  }


  async login(user: AuthCredentialsDto): Promise<any> {
    const login = await this.validateUser(user.email, user.password)
    const payload = { email: login.email, sub: login._id, role: login.role , restaurent : login.restaurent};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async addStuff(createStuffDto: CreateStuffDto): Promise<any> {
    const hashedPassword = await bcrypt.hash(createStuffDto.password, 10);
    const user = await this.userModel.create({ email: createStuffDto.email, password: hashedPassword, role: createStuffDto.role , restaurent : createStuffDto.restaurent });
    if (user) {
      console.log(user,'user');
      
      this.sendEmailAddStuff(user);
      return { user };
    }
    return null
  }

  async addAdmin(createStuffDto: CreateStuffDto): Promise<any> {
    const hashedPassword = await bcrypt.hash(createStuffDto.password, 10);
    const user = await this.userModel.create({ email: createStuffDto.email, password: hashedPassword, role: createStuffDto.role });
    if (user) {
      this.sendEmailAddStuff(user);
      return { user };
    }
    return null
  }

  async findAll(): Promise<User[]> {
    return await this.userService.findAll()
  }

  async findAllByRestaurent(restaurent: number): Promise<User[]> {
    return await this.userService.findAllByRestaurent(restaurent)
  }

  async changePassword(changePasswordDto: ChangePasswordDto): Promise<any> {
    const login = await this.validateUser(changePasswordDto.email, changePasswordDto.password)
    if (login) {
      const hashedPassword = await bcrypt.hash(changePasswordDto.newPassword, 10);
      const newUser = this.userService.update(changePasswordDto.email, { password: hashedPassword })
      if (newUser) {
        return newUser
      }
      return null

    }
    return null

  }

  async sendEmailAddStuff(user) {
    const content = `email : ${user.email} \n password : 123123123 \n veuillez changer votre mot de passe link Application :   `
    this.mailerService.sendEmail(user.email, '[Activation de compte CooK FloW]', content)
  }



}
