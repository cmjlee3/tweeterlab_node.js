BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tweets;

CREATE TABLE users (
  user_id INT PRIMARY KEY,
  username VARCHAR(15) NOT NULL
);

CREATE TABLE tweets (
  tweet_id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  likes INT NOT NULL DEFAULT 0,
  user_id INT REFERENCES users(user_id)
);

COMMIT;
