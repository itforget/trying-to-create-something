import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { EmailValidation } from 'src/validation/email-validation';

@Module({
  controllers: [UserController],
  providers: [UserRepository, EmailValidation],
})
export class UserModule {}
