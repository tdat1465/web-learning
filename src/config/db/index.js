const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/web_dev', {});
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

module.exports = { connect };
