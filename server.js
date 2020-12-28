const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/:vehicle/:bruno', (req, res) => {
        return app.render(req, res, '/vehicle', { productUrl: req.params.productUrl})
    })
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(4000, err => {
        if (err) throw err;
        console.log('ready on http://localhost:4000')
    })
}).catch(ex => {
    console.error(ex.stack);
    process.exit(1);

})

