import { Injectable } from '@nestjs/common';
import { UserRepository } from './../user/user.repository';
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailValidation implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(
    value: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const userWithEmailExist = await this.userRepository.exitWithEmail(value);
    return !userWithEmailExist;
  }
}

export const EmailIsUnique = (optionOfValidation: ValidationOptions) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (objeto: Object, proprieties: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: proprieties,
      options: optionOfValidation,
      constraints: [],
      validator: EmailValidation,
    });
  };
};
