const express = require('express');
const multer = require('multer');// faz o multipart form-data funcionar
const PostController = require('./controllers/PostController');
const UploadsConfig = require('./config/upload');
const LikeController = require('./controllers/LikeController');

// multer faz o express entender o multipart form-data
const routes = new express.Router();
const upload = multer(UploadsConfig);

/* routes.get('/', (req, res)=>{//rota com um middlewere, req = requisição e res = resposta
    return res.send('Hello World 2');
}); */

routes.post('/posts', upload.single('image'), PostController.store);// rota igual o laravel, com o upload.single, funciona o post como gostariamos, tratando de imagem
routes.get('/posts', PostController.index);

routes.post('/posts/:id/like', LikeController.store);
module.exports = routes;
