import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Restaurant } from 'src/Schemas/restaurant.schema';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';

@Injectable()
export class RestauranteService {
  constructor(
    @Inject('RESTAURANT_MODEL')
    private restauranteModel: Model<Restaurant>,
  ) {}
  create(createRestauranteDto: CreateRestauranteDto) {
    const createRestaurant = new this.restauranteModel(createRestauranteDto);
    return createRestaurant.save();
  }

  findAll() {
    return `This action returns all restaurante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurante`;
  }

  update(id: number, updateRestauranteDto: UpdateRestauranteDto) {
    return `This action updates a #${id} restaurante`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurante`;
  }
}
