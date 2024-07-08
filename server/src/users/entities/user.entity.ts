import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserRoles } from '@utils/common';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({
    type: 'enum',
    enum: UserRoles,
    default: [UserRoles.USER],
    array: true,
  })
  roles: UserRoles[];

  @CreateDateColumn({ default: new Date() })
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
