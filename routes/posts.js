var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send(req.flash());
});

// POST /posts 发表一篇文章
router.post('/', function(req, res, next) {
  res.send(req.flash());
});
module.exports = router;






