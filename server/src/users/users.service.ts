import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userEntity: Repository<UserEntity>,
  ) {}

  createUser() {
    return 'This action adds a new user';
  }

  findUserById() {
    return `This action returns all users`;
  }

  findUserByEmail() {
    return `This action returns all users`;
  }

  deleteUser() {
    return `This action returns a user`;
  }

  updateUser() {
    return `This action updates auser`;
  }
}
