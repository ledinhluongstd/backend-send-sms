import express from 'express'
import bodyParser from 'body-parser'

let tbUsersRouter = require('./data/tbUsers');

let mwJWT = require('../middlewares/jwt');
let mwLog = require('../middlewares/log');
let mwJson = require('../middlewares/json');

let router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use('/tbUsers', tbUsersRouter);

module.exports = router;