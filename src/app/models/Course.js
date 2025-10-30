const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const schema = mongoose.Schema;
mongoose.plugin(slug);

const Course = new schema(
    {
        name: { type: String, required: true },
        description: { type: String, default: '' },
        image: { type: String },
        videoId: { type: String, required: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
