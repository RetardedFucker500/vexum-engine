const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'menu.html'));
});

app.get('/map', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'map.html'));
});

app.get('/bikes', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'bikes.html'));
});

app.get('/settings', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'settings.html'));
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});