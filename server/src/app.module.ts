import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { datasourceOptions } from '../db/data-source';
import { UsersModule } from '@users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(datasourceOptions), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}