import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailIsUnique } from 'src/validation/email-validation';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @MinLength(6)
  password: string;
  @IsNotEmpty()
  @IsDateString()
  dateBirth: string;
  @IsNotEmpty()
  @IsEmail()
  @EmailIsUnique({ message: 'User already registered with this email ' })
  email: string;
}
