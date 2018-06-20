DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL primary key,
    email VARCHAR(150) unique not null,
    hash_pass VARCHAR(300) not null
);

-- CREATE TABLE user_profiles (
--     id SERIAL primary key,
--     user_id INTEGER not null,
--     image_url VARCHAR(300)
-- )
