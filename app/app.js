var express = require('express');
const app = express()
const axios = require('axios');

app.get('/', (req, res) => {
  res.send('Let the chaos begin!');
});

app.get('/joke', (req, res) => {
  axios.get('http://icanhazdadjoke.com:80',
    {
      headers: {
        'Accept': 'application/json',
      },
      timeout: 800
    })
    .then(response => {
      console.log(`${response.data.joke}`);
      res.send(`${response.data.joke}`);
    })
    .catch(error => {
      console.log('sorry, no joke for you today 😭');
      if (error.code === 'ECONNABORTED') {
        res.status(503).send('sorry, no joke for you today 😭');
      } else {
        res.status(500).send('generic error');
      }
    })
});

app.listen(3000, function () {
  console.log('Let the chaos begin!');
});
