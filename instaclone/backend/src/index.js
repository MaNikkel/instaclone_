const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');// backend acessível ao frontend

const app = express();// express cria um "servidor"

const server = require('http').Server(app);// protocolo http funcionando também
const io = require('socket.io')(server);// adapta o protocolo para ser real-time (websocket)

mongoose.connect('mongodb+srv://mathiasnikkel:mathias@cluster0-2e5ny.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.io = io;
  next();// o middlewere não trava o resto
});// todos tem acesso ao req.io, sendo assim adaptado o protocolo para o websocket real-time


app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(cors());

app.use(require('./routes'));// usa as rotas do arquivo externo

server.listen(3333);// ligado á porta 3333

