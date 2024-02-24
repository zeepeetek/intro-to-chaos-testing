var express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send('Let the chaos begin!');
});

app.get('/joke', (req, res) => {
  res.send('Wenn ist das Nunstück git und Slotermeyer? Ja! Beiherhund das Oder die Flipperwaldt gersput!');
});

app.listen(3000, function () {
  console.log('Let the chaos begin!');
});