import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { clientsProviders } from './clients.providers';
import { DatabaseModule } from 'src/shared/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [ClientsController],
  providers: [ClientsService, ...clientsProviders],
})
export class ClientsModule {}
