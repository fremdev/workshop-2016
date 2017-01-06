import express from 'express';
import bodyParser from 'body-parser';

import { serverPort } from '../config/config';

import * as db from './utils/dbUtils';

db.setupConnection();

const app = express();

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

app.use(bodyParser.json());
app.use(allowCrossDomain);

app.get('/notes', (req, res) => {
  db.getNotesList().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
  db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
  db.deleteNote(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
  console.log(`Server is up and running on port ${serverPort}`);
});
