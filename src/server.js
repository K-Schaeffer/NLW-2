// Server config
const express = require('express');
const server = express();
const port = 3000;


const { pageLanding, pageStudy, pageGiveClasses, saveGiveClasses } = require('./pages');

// Nunjucks config (Template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views/pages', {
    express: server,
    noCache: true
});

server
    .use(express.static("public")) // Use static files from public source
    .use(express.urlencoded({extended: true})) // Allowing the body use
    // App routing
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses)
    .post('/save-give-classes', saveGiveClasses)
    // Server start
    .listen(port);