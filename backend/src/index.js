const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const watson = require('./watson/client-watson');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post('/messages/', (req, res) => {
  const { text, context = {} } = req.body;

  const params = {
      input: { text },
      workspace_id: 'a34a094e-b88e-44a8-9226-fe5b91d7bccc',
      context,
  };

  watson.message(params, (err, response) => {
      if (err) res.status(500).json(err);
      res.json(response);
  });
});


app.listen(4200);