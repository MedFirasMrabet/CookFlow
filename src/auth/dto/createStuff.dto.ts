// auth/dto/auth-credentials.dto.ts

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from '../enum/role.enum';
import { ApiProperty } from '@nestjs/swagger';
import { Restaurent } from 'src/restaurent/models/restaurent.schema';

export class CreateStuffDto {

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  role?: UserRole;

  @IsNotEmpty()
  @ApiProperty()
  restaurent: string;

}