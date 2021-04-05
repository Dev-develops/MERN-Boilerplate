const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000"
}))

app.listen(3001, (req, res) => {
    console.log("Server Listening At Port 3001");
})