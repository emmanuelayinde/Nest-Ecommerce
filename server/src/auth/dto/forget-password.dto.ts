import { PickType } from '@nestjs/swagger';
import { CreateUserDto } from '@users/dto/create-user.dto';

export class ForgetPasswordDto extends PickType(CreateUserDto, ['email']) {}