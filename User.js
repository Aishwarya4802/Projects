let mongoose=require('mongoose');

let userSchema=mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    passWord: {
        type: String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user','moderator'],
        default:'user'
    }
})

let User=mongoose.model('user',userSchema);
module.exports = User;
