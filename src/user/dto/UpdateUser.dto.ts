import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from 'class-validator';
import { EmailIsUnique } from 'src/validation/email-validation';

export class UpdateUserDTO {
  @IsNotEmpty()
  @IsOptional()
  name: string;
  @IsNotEmpty()
  @MinLength(6)
  @IsOptional()
  password: string;
  @IsNotEmpty()
  @IsDate()
  dateBirth: string;
  @IsNotEmpty()
  @IsEmail()
  @EmailIsUnique({ message: 'User already registered with this email ' })
  @IsOptional()
  email: string;
}
