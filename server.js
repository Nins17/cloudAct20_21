const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
   
    const filePath = path.join(__dirname, 'index.html');

   
    fs.readFile(filePath, (err, data) => {
        if (err) {
          
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});