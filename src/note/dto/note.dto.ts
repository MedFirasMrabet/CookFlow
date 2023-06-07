// auth/dto/auth-credentials.dto.ts

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/auth/user/user.schema';

export class CreateNoteDto {

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  sender: User;

  @IsNotEmpty()
  recipient?: User;

}
