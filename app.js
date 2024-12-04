require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const configRoutes = require('./routes/configurations');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/authentications', authRoutes);
app.use('/configurations', configRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
