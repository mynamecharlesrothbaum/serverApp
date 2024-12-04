const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect((err) => {
    if (err) {
        console.error('Could not connect to the database:', err);
        process.exit(1);
    } else {
        console.log('Connected to the database successfully.');
    }
});

module.exports = db;
