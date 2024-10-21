require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('<h1>{ message: "Hello, World!" }</h1>');
});

app.get('/health', (req, res) => {
    res.send('<h1>{ status: "healthy" }</h1>');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at PORT: ${port}`);
});
