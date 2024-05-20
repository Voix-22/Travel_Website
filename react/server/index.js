const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());  // To parse JSON request bodies

// Running the server
app.listen(3002, () => {
    console.log('Server is running on port 3002');
});

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'your_password',
    database: 'travels',
});

app.post('/register', (req, res) => {
    const sentEmail = req.body.Email;
const sentUsername = req.body.Username;
const sentPassword = req.body.Password;

console.log("Data received:", sentUsername, sentPassword); // Log the received data

const SQL = 'INSERT INTO Users (email, username, password) VALUES (?, ?, ?)';
const values = [sentEmail, sentUsername, sentPassword];

db.query(SQL, values, (err, results) => {
    if (err) {
        console.error("Error inserting user:", err);
        res.status(500).send({ error: 'Error registering user' });
    } else {
        console.log("User inserted:", results);
        res.send({ message: 'User added!' });
    }
});

});
