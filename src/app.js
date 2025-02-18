// filepath: /c:/Users/bas/Git/Repos/headless-cms/src/app.js
const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const setRoutes = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 3000;

let dbConnectionMessage = '';

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'bprtscom_bprtscom',
    password: 'V]6Z-J]Y,X9$',
    database: 'admin'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        dbConnectionMessage = 'Error connecting to the database';
        return;
    }
    console.log('Connected to the database');
    dbConnectionMessage = 'Connected to the database';
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { dbConnectionMessage });
});

setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});