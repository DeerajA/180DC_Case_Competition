import { sqliteTable, text, integer, primaryKey } from "drizzle-orm/sqlite-core";

export const profiles = sqliteTable("profiles", {
  userId: text("user_id").primaryKey(),
  chapter: text("chapter").notNull().default("UNC Charlotte"),
  createdAt: integer("created_at").notNull(),
});

export const progress = sqliteTable("progress", {
  userId: text("user_id").notNull(),
  caseId: text("case_id").notNull(),
  completedAt: integer("completed_at").notNull(),
  score: integer("score").notNull(),
}, (table) => [primaryKey({ columns: [table.userId, table.caseId] })]);

export const academyState = sqliteTable('academy_state', {
 userId:text('user_id').primaryKey(),
 data:text('data').notNull(),
 revision:integer('revision').notNull().default(0),
 updatedAt:integer('updated_at').notNull(),
});
