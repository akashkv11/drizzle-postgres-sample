import { posts, user } from "./schema";

export type NewUserType = typeof user.$inferInsert
export type NewPostType = typeof posts.$inferInsert