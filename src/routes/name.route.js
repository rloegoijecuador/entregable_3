const { getAll, create, getOne, remove, update } = require('../controllers/name.controllers');
const express = require('express');

const nameRoueter = express.Router();

nameRoueter.route('/name')
    .get(getAll)
    .post(create);

nameRoueter.route('/name/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = nameRoueter;