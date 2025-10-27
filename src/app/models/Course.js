const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Course = new schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);