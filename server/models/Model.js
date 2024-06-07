const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:String,
    imgUrl:String
})

const User=mongoose.model('Users',userSchema);

module.exports=User;