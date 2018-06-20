const express = require('express');
const app = express();
const compression = require('compression');


app.use(compression());
app.use(express.static(__dirname + '/public'));


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
    res.sendFile(__dirname + '/index.html');
})

app.get('/', function(req, res) {
        res.redirect('/welcome');
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
