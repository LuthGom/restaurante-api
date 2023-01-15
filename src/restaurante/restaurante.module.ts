import { Module } from '@nestjs/common';
import { RestauranteController } from './restaurante.controller';
import { RestauranteService } from './restaurante.service';
import { restaurantProviders } from './restaurante.providers';
import { DatabaseModule } from '../shared/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [RestauranteController],
  providers: [RestauranteService, ...restaurantProviders],
})
export class RestauranteModule {}
