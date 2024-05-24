import { pgTable, serial, text, bigint, unique, varchar, integer, foreignKey } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const __drizzle_migrations = pgTable("__drizzle_migrations", {
	id: serial("id").primaryKey().notNull(),
	hash: text("hash").notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	created_at: bigint("created_at", { mode: "number" }),
});

export const user = pgTable("user", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 50 }).notNull(),
	email: varchar("email").notNull(),
	age: integer("age").notNull(),
},
(table) => {
	return {
		user_email_unique: unique("user_email_unique").on(table.email),
	}
});

export const posts = pgTable("posts", {
	id: integer("id").primaryKey().notNull().references(() => user.id),
	title: varchar("title", { length: 50 }),
	content: varchar("content", { length: 500 }),
	author: integer("author"),
});