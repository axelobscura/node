const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>ENTER MESSAGE</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SUBMIT</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');

});

server.listen(3000);