var express = require('express');
var router = express.Router();

var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err,docs){
      var products = [];
      for ( var i = 0 ; i < docs.length ; i++){
         products.push(docs[i]);
      }
      res.render('shop/index', { title: 'Shopping Cart' , products: products });
  });
});


module.exports = router;
