const { getAll, create, getOne, remove, update } = require('../controllers/actors.controllers');
const express = require('express');

const actorRoute = express.Router();

actorRoute.route('/actor')
    .get(getAll)
    .post(create);

actorRoute.route('/actor/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = actorRoute;