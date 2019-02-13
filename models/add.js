const mongooose =require('mongoose');

var AddSchema =mongooose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String,
    date:Date
});

var Add =mongooose.model('adds',AddSchema);
module.exports=Add;