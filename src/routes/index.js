const express = require('express');
const nameRoueter = require('./name.route');
const actorRoute = require('./actors.route');
const router = express.Router();

router.use(nameRoueter)
router.use(actorRoute)



module.exports = router;