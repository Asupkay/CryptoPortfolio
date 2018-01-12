const constructorMethod = app => {
    app.get('/', (req, res) => {
        res.json({error: "To be implemented will be main page"});
    });

    app.get('*', (req, res) => {
        res.json({ error: "not a valid route"});
    });
};

module.exports = constructorMethod;
