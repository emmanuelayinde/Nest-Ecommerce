import { Injectable } from '@nestjs/common';

import { UsersService } from '@users/users.service';
import { SignUpAuthDto } from './dto/signup-auth.dto';

@Injectable()
export class AuthService {
  private userService: UsersService;
  constructor() {}

  signUpUser() {
    return `This action returns all auth`;
  }

  signInUser(createAuthDto: SignUpAuthDto) {
    return 'This action adds a new auth';
  }

  sendForgetPasswordLink(id: number) {
    return `This action returns a #${id} auth`;
  }

  resetUserPassword(id: number, updateAuthDto: SignUpAuthDto) {
    return `This action updates a #${id} auth`;
  }
}
