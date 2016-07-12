var express = require('express');
var app = express();
var port = process.env.PORT || 8181; 

var mongoose = require('mongoose');

mongoose.connect('mongodb://test-mongo-lab:testmongolab@ds017155.mlab.com:17155/node-example');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username:String,
    password:String
})

var User = mongoose.model('User', userSchema);

var testUser = User({
    username:'admin',
    password:'admin'
})

testUser.save(function(err) {
    if(err) throw err;
    console.log('person saved');
})

app.listen(port);