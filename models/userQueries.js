const spicedPg = require('spiced-pg');
const db = spicedPg(process.env.DATABASE_URL || 'postgres:dbadmin:spiced@localhost:5432/mix');

module.exports.newUser = function(email, password) {
    return db
        .query(
            `INSERT INTO users (email, hash_pass) VALUES ($1, $2) returning id`,
            [email || null, password || null]
        )
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
};

module.exports.checkLogin = function(email) {
    return db
        .query(
            `SELECT * FROM users WHERE (email) = ($1)`,
            [email]
        )
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("checkLogin userQueries Catch", err);
        });
};
