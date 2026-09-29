CREATE TABLE `profiles` (
	`user_id` text PRIMARY KEY NOT NULL,
	`chapter` text DEFAULT 'UNC Charlotte' NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `progress` (
	`user_id` text NOT NULL,
	`case_id` text NOT NULL,
	`completed_at` integer NOT NULL,
	`score` integer NOT NULL,
	PRIMARY KEY(`user_id`, `case_id`)
);
