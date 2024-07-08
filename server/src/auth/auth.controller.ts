import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpAuthDto } from './dto/signup-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() createAuthDto: SignUpAuthDto) {
    return this.authService.signUpUser();
  }

  @Post('sign-in')
  signIn(@Body() createAuthDto: SignUpAuthDto) {
    return this.authService.signUpUser();
  }

  @Post('forget-password')
  forgetPassword(@Body() createAuthDto: SignUpAuthDto) {
    return this.authService.signUpUser();
  }

  @Post('reset-password')
  resetPassword(@Body() createAuthDto: SignUpAuthDto) {
    return this.authService.signUpUser();
  }
}
