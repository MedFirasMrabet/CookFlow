// auth/dto/auth-credentials.dto.ts

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ChangePasswordDto {


  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  newPassword: string;


}
