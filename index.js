const http = require('http');
const fs = require('fs');
const url = require('url');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    const requestURL = url.parse(req.url, true);

    if(requestURL.pathname === '/about'){
        const file = fs.readFileSync('./about.html', 'utf8');
        return res.end(file);
    }
    else if(requestURL.pathname === '/contact-me'){
        const file = fs.readFileSync('./contact-me.html', 'utf8');
        return res.end(file);
    }
    else if(requestURL.pathname === '/'){
        const file = fs.readFileSync('./index.html', 'utf8');
        return res.end(file);
    } else {
        const file = fs.readFileSync('./404.html', 'utf8');
        return res.end(file);
    }
});

server.listen(port, () => {
    console.log('Connected');
});