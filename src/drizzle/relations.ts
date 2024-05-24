import { relations } from "drizzle-orm/relations";
import { user, posts } from "./schema";

export const postsRelations = relations(posts, ({one}) => ({
	user: one(user, {
		fields: [posts.id],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	posts: many(posts),
}));