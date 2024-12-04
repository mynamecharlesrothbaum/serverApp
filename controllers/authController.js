const db = require('../config/db');

exports.authenticateUser = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and/or password missing' });
    }

    const query = 'SELECT * FROM Accounts WHERE username = ?';
    db.query(query, [username], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }

        if (results.length > 0 && results[0].password === password) {
            res.status(200).json({ message: 'Authentication successful' });
        } else {
            res.status(400).json({ error: 'Invalid username or password' });
        }
    });
};

exports.registerUser = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Please provide both username and password' });
    }

    const query = 'SELECT * FROM Accounts WHERE username = ?';
    db.query(query, [username], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }

        if (results.length > 0) {
            return res.status(400).json({ error: 'Username already taken' });
        }

        const insertQuery = 'INSERT INTO Accounts (username, password) VALUES (?, ?)';
        db.query(insertQuery, [username, password], (insertErr) => {
            if (insertErr) {
                return res.status(500).json({ error: 'Failed to register user' });
            }
            res.status(200).json({ message: 'User registered successfully' });
        });
    });
};
