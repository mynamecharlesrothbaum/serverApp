const db = require('../config/db');
const queryAsync = require('../utils/helpers');

exports.getUserId = async (username) => {
    const query = 'SELECT user_id FROM Accounts WHERE username = ?';
    const result = await queryAsync(query, [username]);
    if (result.length === 0) throw new Error('User not found');
    return result[0].user_id;
};
