-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback"
(
  "id" serial primary key,
  "feeling" INT not null,
  "feeling_desc" text,
  "understanding" INT not null,
  "understanding_desc" text,
  "support" INT not null,
  "support_desc" text,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback"
  ("feeling", "feeling_desc", "understanding", "understanding_desc", "support", "support_desc", "comments")
VALUES
  (4, 'I''m feeling good.', 4, 'I understand most of it.', 5, 'I feel very supported!', 'Doing Great!');
