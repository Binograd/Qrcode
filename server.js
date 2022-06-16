const express = require("express");
const { url } = require("inspector");
const path = require("path");
const port = process.env.PORT ?? 5000;

const app = express();
app.use(express.static(__dirname + '/src'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
})
app.get('/stands', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'stands.html'))
})
app.get('/items', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'items.html'))
})

app.listen(port, () => { console.log("Server running, port:", port); });