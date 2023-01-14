import * as mongoose from 'mongoose';

const MONGO_DB_PASSWORD = process.env.MONGODB_PASSWORD;
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb+srv://livraria_api_ts:${MONGO_DB_PASSWORD}.lifxpal.mongodb.net/test`,
      ),
  },
];
