import { Connection } from 'mongoose';
import { ResturantSchema } from 'src/Schemas/restaurant.schema';

export const restaurantProviders = [
  {
    provide: 'RESTAURANT_MODEL',
    useFactory: (connection: Connection) => connection.model('Restaurant', ResturantSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];