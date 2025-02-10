import express from 'express';

const app = express();
const PORT = process.env.PORT || 36363; // Codespaces uses environment ports

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.send('Hello from Codespaces!');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running at: https://organic-spork-jj77q7vg9q952565p-${PORT}.app.github.dev/`);
});
