const express = require('express')
const db = require('./models/db')
import passport from 'passport';
import { loginRouter } from './routes/login.js';
const controller = require('./controllers/clienteController')
const clienteRouter  = require('./routes/clienteRouter')

const app = express()
const port = 3000

app.use(express.static('public'));

//MIDDLEWARES
app.use(express.json()); // para poder parsear JSON
app.use('/cliente', clienteRouter);
app.use(passport.initialize());

app.use("/auth", loginRouter)

app.listen(port, () => {
  console.log(`\x1b[32m%s\x1b[0m`, `Aplicación ejecutándose en http://localhost:${port}`);
});