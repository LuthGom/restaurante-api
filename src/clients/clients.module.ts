import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { DatabaseModule } from 'src/shared/database/database.module';
import { clientsProviders } from './clients.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientsController],
  providers: [ClientsService, ...clientsProviders],
})
export class ClientsModule {}
