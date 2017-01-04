import express from 'express';

const app = express();

app.get('/notes', (req, res) => {
  res.send('Hello World!');
});

app.post('/notes', (req, res) => {

});

app.delete('/notes/:id', (req, res) => {

});

const server = app.listen(8080, () => {
  console.log('Server is up and running on port 8080');
});
