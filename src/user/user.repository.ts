import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  save(user: UserEntity) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async exitWithEmail(email: string) {
    const possibleUser = this.users.find((user) => user.email === email);
    return possibleUser !== undefined;
  }

  private searchForID(id: string) {
    const possibleUser = this.users.find((userSave) => userSave.id === id);

    if (!possibleUser) {
      throw new Error('User not found!!!');
    }
    return possibleUser;
  }

  async update(id: string, dataOfUpdate: Partial<UserEntity>) {
    const user = this.searchForID(id);

    Object.entries(dataOfUpdate).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      user[key] = value;
    });
    return user;
  }

  async remove(id: string) {
    const user = this.searchForID(id);
    this.users = this.users.filter((usuarioSalvo) => usuarioSalvo.id !== id);

    return user;
  }
}
