const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const secrets = require('./secrets.json');





const middleware = require('./middleware.js');
const userQueries = require('./models/userQueries.js');



//Middleware Function
const hashPassword = middleware.hashPassword;
const checkPassword = middleware.checkPassword;

//Database queries
const newUser = userQueries.newUser;
const checkLogin = userQueries.checkLogin;
// const createUserTable = userQueries.createUserTable;
// const insertMix = userQueries.insertMix;
// const getAllUserInfo = userQueries.getAllUserInfo;
const addNewMix = userQueries.addNewMix;
const getUserMixes = userQueries.getUserMixes;

app.use(compression());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cookieSession({
    secret: process.env.SESSION_SECRET || secrets.secret,
    maxAge: 1000 * 60 * 60 * 24 * 14
}));



if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}
app.get('/welcome', (req, res) => {
    if(req.session.user) {
        res.redirect('/');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.get('/getusermixes', (req, res) => {
    getUserMixes(req.session.user.id)
    .then(resp => {
        // const results = resp.rows[0]
        res.json({
            results: resp.rows
        })
    })
})


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    checkLogin(email)
    .then(results => {
        if(!results.rows[0]) {
            res.json({
                success: false,
                reason: 'No matching email'
            })
        }
        checkPassword(password, results.rows[0].hash_pass)
        .then(doesMatch => {
            if (doesMatch) {
                req.session.user = {
                    email: results.rows[0].email,
                    id: results.rows[0].id
                }
                res.json({
                    success: true
                })
            } else {
                res.json({
                    success: false,
                    reason: 'Incorrect Password'
                })
            }
        })
    })
    .catch(err => {
        console.log(err);
    })
});


app.post('/register', (req, res) => {
    const { email, password } = req.body;
    hashPassword(password)
        .then(hashedPassword => {
            newUser(email, hashedPassword)
                .then(results => {
                    if(results.code === 23505) {
                        res.json({
                            success: false,
                            notUniqueEmail: true
                        });
                    } else {
                        req.session.user = {
                            email,
                            id: results.rows[0].id
                        };
                        res.json({
                            success: true
                        });
                    }
                })
                .catch(err => {
                    console.log("newUser Catch", err);
                })
        })
        .catch(err => {
            console.log("hashPassword Catch", err);
        })
});

app.post('/upload', (req, res) => {
    const { upload, title, playlist } = req.body;
    console.log("playlist", playlist);
    console.log("title", title);

    addNewMix(req.session.user.id, upload)
    .then(resp => {
        res.json({
            success: true
        })
    })
    .catch(err => {
        console.log("addnewMix catch", err);
    })
})



app.get('*', function(req, res) {
    if(!req.session.user) {
        res.redirect('/welcome');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
