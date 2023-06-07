// auth/dto/auth-credentials.dto.ts

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthCredentialsDto {

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

}
