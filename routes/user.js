var express = require('express');
var csrf = require('csurf');
var router = express.Router();
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);
router.get('/profile',isLoggedIn,function(req,res,next){
    res.render('user/profile');
  });

router.get('/logout',isLoggedIn,function(req,res,next){
    req.logOut();
    res.redirect('/');
  });  

router.use('/',notLoggedIn,function(req,res,next){
    next();
}) 

router.get('/signup',function(req,res,next){
    var messages = req.flash('error');
    console.log(req.flash('error'));
    res.render('user/signup',{csrfToken:req.csrfToken(), messages:messages , haserrors:messages.length > 0 });
  });
  
  router.post('/signup',passport.authenticate('local.signup',{
    successRedirect:'profile',
    failureRedirect:'signup',
    failureFlash:true
  }));
  
  
  router.get('/signin',function(req,res,next){
    var messages = req.flash('error');
    //console.log(req.flash('error'));
    res.render('user/signin',{csrfToken:req.csrfToken(), messages:messages , haserrors:messages.length > 0 });
  });
  

  router.post('/signin',passport.authenticate('local.signin',{
    successRedirect:'profile',
    failureRedirect:'signin',
    failureFlash:true
  }));


  module.exports = router;

  function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req,res,next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}