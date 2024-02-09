const express = require('express')
const db = require('./models/db')

const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/22', (req, res) => {
  res.send('holaeeee')
})

app.listen(port, () => {
  console.log(`\x1b[32m%s\x1b[0m`, `Aplicación ejecutándose en http://localhost:${port}`);
});