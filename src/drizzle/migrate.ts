import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client);
async function main() {
  await migrate(db, { migrationsFolder: 'drizzle/migrations' });
  await client.end();
}

main();
