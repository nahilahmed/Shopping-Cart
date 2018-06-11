var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});

userSchema.methods.encryptpassword = function(password){
  return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
}

userSchema.methods.decryptpassword = function(password){
  return bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model('User',userSchema);
