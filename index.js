const express = require('express');
const http = require('http');
const path = require('path');
import https from 'https';
import fs from 'fs';


const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, app).listen(443, () => {
    console.log('HTTPS server running on port 443');
});
