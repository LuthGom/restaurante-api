import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients.controller';
import { ClientService } from './clients.service';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [ClientService],
})
export class AppModule {}
