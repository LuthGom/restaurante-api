import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { ClientService } from './clients/clients.service';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [ClientsModule],
  controllers: [ClientsController],
  providers: [ClientService],
})
export class AppModule {}
