/* -------- Require -------- */

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

/* -------- API routes -------- */

// place routes above ^^ //
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/* -------- Port Connection -------- */
const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express running on port ${port}`)
});