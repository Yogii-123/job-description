const mongoose=require('mongoose')
const arrayname1=new mongoose.Schema({
    Name:{
        type:String,
    // required: true
    },
    Email:{
        type:String,
    // required: true
    },
    Phone:{
        type:Number,
    // required: true
    },
    Describtion:{
        type:String,
    // required: true
    },
    Resume:{
        data:Buffer,
        contentType:String
    }
})
module.exports=mongoose.model('jobform',arrayname1)
