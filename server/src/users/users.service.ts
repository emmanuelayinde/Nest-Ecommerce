import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';
import { FindUserByEmailDto, FindUserByIdDto } from './dto/find-user-dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(data: CreateUserDto) {
    const newUser = this.userRepository.create({ ...data });
    return await this.userRepository.save(newUser);
  }

  async findUserById({ id }: FindUserByIdDto) {
    return await this.userRepository.findOneBy({ id });
  }

  async findUserByEmail({ email }: FindUserByEmailDto) {
    return await this.userRepository.findOneBy({ email });
  }

  async updateUserProfile(data: UpdateUserDto) {
    return await this.userRepository.update(
      { id: data.id },
      {
        ...data,
      },
    );
  }

  // async updateUserPassword(data: UpdateUserDto) {
  //   return await this.userRepository.update(
  //     { id: data.id },
  //     {
  //       ...data,
  //     },
  //   );
  // }

  async softDeleteUser({ id }) {
    return await this.userRepository.softDelete({ id });
  }

  async hardDeleteUser({ id }) {
    return await this.userRepository.delete({ id });
  }
}
