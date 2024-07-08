import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoles } from '@utils/common';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRoles,
    default: [UserRoles.USER],
    array: true,
  })
  roles: UserRoles[];
}
