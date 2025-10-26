const newsRouter = require('./news');
const siteRouter = require('./site');

function Routes(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = Routes;
