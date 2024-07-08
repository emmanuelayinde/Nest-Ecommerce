import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { datasourceOptions } from '@db/data-source';
import { UsersModule } from '@users/users.module';
import { AuthModule } from '@auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(datasourceOptions), UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
