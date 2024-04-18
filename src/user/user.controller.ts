import { CreateUserDTO } from './dto/CreateUser.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto';
import { listUserDTO } from './dto/listUser.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async addUser(@Body() dataUser: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = dataUser.email;
    userEntity.password = dataUser.password;
    userEntity.dateBirth = dataUser.dateBirth;
    userEntity.name = dataUser.name;
    userEntity.id = uuid();

    this.userRepository.save(userEntity);
    return {
      user: new listUserDTO(userEntity.id, userEntity.name),
      message: 'User Created!!!',
    };
  }

  @Get()
  async listUsers() {
    const usersSaved = await this.userRepository.list();
    const usersList = usersSaved.map(
      (user) => new listUserDTO(user.id, user.name),
    );
    return usersList;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() newData: UpdateUserDTO) {
    const userWithNewData = await this.userRepository.update(id, newData);

    return {
      user: userWithNewData,
      message: 'Update user data!!!',
    };
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    const userdelete = await this.userRepository.remove(id);

    return {
      user: userdelete,
      mensagem: 'User Deleted',
    };
  }
}
