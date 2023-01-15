import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [ConfigModule.forRoot(), ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
