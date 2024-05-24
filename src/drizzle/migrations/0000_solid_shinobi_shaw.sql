-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "__drizzle_migrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"hash" text NOT NULL,
	"created_at" bigint
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"email" varchar NOT NULL,
	"age" integer NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" varchar(50),
	"content" varchar(500),
	"author" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/