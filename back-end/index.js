const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Publication = require('./models/Publication');

mongoose.connect('mongodb://root:secret@ds121248.mlab.com:21248/social-network');
mongoose.connection.on('open', () => console.log('Connected to MongoDB'));

const app = express();

app.use(bodyParser.json());

app.get('/api/publications', async (req, res) => {
    res.json(await Publication.find());
});

app.post('/api/publications', async (req, res) => {
    res.json(await Publication.create({body: req.body.body}));
});

app.listen(process.env.PORT || 4000, () => console.log('Express server runing.'));