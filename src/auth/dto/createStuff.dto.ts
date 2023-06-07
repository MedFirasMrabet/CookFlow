// auth/dto/auth-credentials.dto.ts

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from '../enum/role.enum';

export class CreateStuffDto {

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  role?: UserRole;

}
