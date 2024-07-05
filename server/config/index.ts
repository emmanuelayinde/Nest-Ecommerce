import { config } from 'dotenv';
config();

export default {
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
};
