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

module.exports.addNewMix = function(userID, mix) {
    return db
        .query(
            `INSERT INTO user_mixes (user_id, upload) VALUES ($1, $2) returning id`,
            [userID || null, mix || null]
        )
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
};
module.exports.getUserMixes = function(userID) {
    return db
        .query(
            'SELECT * FROM user_mixes WHERE (user_id) = ($1)',
            [userID]
        )
        .then(res => {
            return res
        })
        .catch(err => {
            console.log("getUserMixes catch", err);
        })
}


// module.exports.createUserTable = function(userID) {
//     var sql = "CREATE TABLE ($1) (id SERIAL primary key, uploads VARCHAR(150))";
//     return db
//         .query (
//             sql,
//             [userID]
//         )
//         .then(res => {
//             console.log("createUserTable then", res);
//         })
//         .catch(err => {
//             console.log("createUserTable catch", err);
//         })
// }

// module.exports.insertMix = function(userID) {
//     return db
//         .query(
//             'INSERT INTO users (uploads) VALUES ($1)',
//             [userID]
//         )
//         .then(res => {
//             console.log("DATABASE res", res);
//         })
//         .catch(err => {
//             console.log("ddatabase err", err);
//         })
// }
// module.exports.getAllUserInfo = function(userID) {
//     return db
//         .query(
//             'SELECT * FROM users WHERE (id) = ($1)',
//             [userID]
//         )
//         .then(res => {
//             return res;
//         })
// }
//
// module.exports.addNewMix = function(array, userID) {
//     return db
//         .query(
//             'UPDATE users SET uploads = $1 WHERE id = ($2)',
//             [array, userID]
//         )
//         .then(res => {
//             return res;
//         })
//         .catch(err => {
//             console.log("addNewMix catch", err);
//         })
// }
