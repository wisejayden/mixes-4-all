DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL primary key,
    email VARCHAR(150) unique not null,
    hash_pass VARCHAR(300) not null
);

DROP TABLE IF EXISTS user_mixes;

CREATE TABLE user_mixes (
    id SERIAL primary key,
    user_id VARCHAR(100) not null,
    upload VARCHAR(8000) not null,
    title VARCHAR(300),
    playlist VARCHAR(300)
);
-- CREATE TABLE user_profiles (
--     id SERIAL primary key,
--     user_id INTEGER not null,
--     image_url VARCHAR(300)
-- )
