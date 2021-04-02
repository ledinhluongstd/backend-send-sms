import express from 'express'
import bodyParser from 'body-parser'

let dataRouter = require('./data');

let mwJson = require('../middlewares/json');

let router = express.Router();
router.use(bodyParser.json());

router.use('/data', dataRouter);

module.exports = router;
