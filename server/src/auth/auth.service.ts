import { Injectable } from '@nestjs/common';

import { UsersService } from '@users/users.service';

@Injectable()
export class AuthService {
  private userService: UsersService;

  constructor() {}

  signUpUser() {
    return `This action returns all auth`;
  }

  signInUser() {
    return 'This action adds a new auth';
  }

  sendForgetPasswordLink() {
    return `This action returns a auth`;
  }

  resetUserPassword() {
    return `This action updates a auth`;
  }
}
