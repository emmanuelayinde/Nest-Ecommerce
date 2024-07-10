import { IsEmail, IsNotEmpty, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Full name can not be empty' })
  name: string;

  @IsNotEmpty({ message: 'Email can not be empty' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Password can not be empty' })
  @Min(8, { message: 'Password can not be less than 8 characters' })
  @Max(64, { message: 'Password can not be more than 64 characters' })
  password: string;
}
