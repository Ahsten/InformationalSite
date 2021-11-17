const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact-me', function(req, res){
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.listen(port, () => {
    console.log('connected');
});