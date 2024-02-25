var express = require('express');
const app = express()
const axios = require('axios');
const axiosRetry = require('axios-retry').default;

app.get('/', (req, res) => {
  res.send('Let the chaos begin!');
});

axiosRetry(axios, {
  retries: 5,
  onRetry: (retryCount, error, requestConfig) => {
    console.log(`retry count: `, retryCount);
  },
  shouldResetTimeout: true,
  retryCondition: (_error) => true
});

app.get('/joke', (req, res) => {
  axios.get('http://proxy:8080',
    {
      headers: {
        'Accept': 'application/json',
        'Host': 'icanhazdadjoke.com:80'
      },
      timeout: 1000
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
