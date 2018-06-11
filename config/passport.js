var passport = require('passport');
var User = require('../models/user');
var localStrategy = require('passport-local');

passport.serializeUser(function(user,done){
    done(null,user.id);
});

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
      done(err,user);
    });
});

passport.use('local.signup',new localStrategy({
      usernameField:'email',
      passwordField:'password',
      passReqToCallback: true
  },function(req,email,password,done){
      req.checkBody('email','Invalid E-mail!').notEmpty().isEmail();
      req.checkBody('password','Password Too Short(Min:4)!').notEmpty().isLength({min:4});
      var errors = req.validationErrors();
      if(errors){
        var messages = [];
        errors.forEach(function(error){
          messages.push(error.msg);
        })
        return done(null,false,req.flash('error',messages));
      }
      User.findOne({'email':email},function(err,user){
        if(err){
          return done(err);
        }
        if(user){
          console.log("here");
          return done(null,false,{message:'Email is already in use'});
        }
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptpassword(password);
        newUser.save(function(err,result){
          if(err){
            return done(err);
          }
          else{
            return done(null,newUser);
          }
        });
      });
  }));


  passport.use('local.signin',new localStrategy({
        usernameField:'email',
        passwordField:'password',
        passReqToCallback: true
    },function(req,email,password,done){
        req.checkBody('email','Invalid E-mail!').notEmpty().isEmail();
        req.checkBody('password','Wrong Password!').notEmpty();
        var errors = req.validationErrors();
        if(errors){
          var messages = [];
          errors.forEach(function(error){
            messages.push(error.msg);
          })
          return done(null,false,req.flash('error',messages));
        }
        User.findOne({'email':email},function(err,user){
          if(err){
            return done(err);
          }
          if(!user){
            //console.log("here");
            return done(null,false,{message:'User not found'});
          }
          if(!user.decryptpassword(password)){
            return done(null,false,{message:'Wrong Password'});
          }
          return done(null,user);
        });
    }));
