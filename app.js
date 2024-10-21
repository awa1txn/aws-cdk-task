require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('{ message: "Hello, World!" }');
});

app.get('/health', (req, res) => {
    res.send('{ status: "healthy" }');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at PORT: ${port}`);
});
