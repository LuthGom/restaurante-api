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
  async create(
    createRestauranteDto: CreateRestauranteDto,
  ): Promise<Restaurant> {
    const createRestaurant = new this.restauranteModel(createRestauranteDto);
    return createRestaurant.save();
  }

  async findAll(): Promise<Restaurant[]> {
    return this.restauranteModel.find().exec();
  }

  findOne(id: string) {
    return this.restauranteModel.findById(id).exec();
  }

  update(id: string, updateRestauranteDto: UpdateRestauranteDto) {
    return this.restauranteModel
      .findByIdAndUpdate(
        { _id: id },
        { $set: updateRestauranteDto },
        { new: true },
      )
      .exec();
  }

  remove(id: string) {
    return this.restauranteModel.findByIdAndDelete({ _id: id }).exec();
  }
}
