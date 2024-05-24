import 'dotenv/config';

import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  dialect: 'postgresql',
  schema: './src/drizzle/schema.ts',
  out: './src/drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  migrations: {
    schema: 'public',
  },
  verbose: true,
  strict: true,
});
