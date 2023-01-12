import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ClientsController } from './clients/clients.controller';
import { ClientsService } from './clients/clients.service';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [ConfigModule.forRoot(), ClientsModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class AppModule {}
