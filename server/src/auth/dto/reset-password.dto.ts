import { IsEmail, IsNotEmpty, Max, max, Min } from 'class-validator';
import { SignInDto } from './signin-auth.dto';

export class ResetPasswordDto extends SignInDto {
  @IsNotEmpty({ message: 'Confirm Password can not be empty' })
  @Min(8, { message: 'Confirm Password can not be less than 8 characters' })
  @Max(64, { message: 'Confirm Password can not be more than 64 characters' })
  confirmPassword: string;
}
