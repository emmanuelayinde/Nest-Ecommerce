import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup-auth.dto';
import { SignInDto } from './dto/signin-auth.dto';
import { ForgetPasswordDto } from './dto/forget-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() body: SignUpDto) {
    return this.authService.signUpUser();
  }

  @Post('sign-in')
  signIn(@Body() body: SignInDto) {
    return this.authService.signUpUser();
  }

  @Post('forget-password')
  forgetPassword(@Body() body: ForgetPasswordDto) {
    return this.authService.signUpUser();
  }

  @Post('reset-password')
  resetPassword(@Body() body: ResetPasswordDto) {
    return this.authService.signUpUser();
  }

  @UseGuards(AuthGuard)
  @Get('validate-token')
  getProfile(@Request() req) {
    return req.user;
  }
}
