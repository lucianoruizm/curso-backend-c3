var express = require('express');
var router = express.Router();
const {itemsList} = require('../controllers/controller')

/* GET users listing. */
// http://localhost:3000/items
router.get('/', function(req, res, next) {
  res.send('items');
});

// http://localhost:3000/items/list
router.get('/list', itemsList);


module.exports = router;