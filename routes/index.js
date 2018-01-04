const constructorMethod = app => {
    app.get('/', (req, res) => {
        res.json({error: "To be implemented"});
    });

    app.get('*', (req, res) => {
        res.json({ error: "not a valid route"});
    });
};

module.exports = constructorMethod;
