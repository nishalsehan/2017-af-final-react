const express = require('express');
const BookController = require('../Controller/BookController');
const AuthorController = require('../Controller/AuthorController');
const Router = express.Router();

Router.use('/book',BookController);
Router.use('/author',AuthorController);

module.exports = Router;
