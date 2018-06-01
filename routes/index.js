var express = require('express');
var csrf = require('csurf');
var router = express.Router();
var Product = require('../models/product');

var csrfProtection = csrf();

router.use(csrfProtection);

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

router.get('/user/signup',function(req,res,next){
  res.render('user/signup',{csrfToken:req.csrfToken()});
});

router.post('/user/signup',function(req,res,next){
   res.redirect('/');
})

module.exports = router;
