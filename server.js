const express = require('express');
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');
const app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get('/api/timers', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

export default app;