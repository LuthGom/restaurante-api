import { Connection } from 'mongoose';
import { ClientSchema } from '../Schemas/client.schema';

export const clientsProviders = [
  {
    provide: 'CLIENT_MODEL',
    useFactory: (connection: Connection) => connection.model('Client', ClientSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];