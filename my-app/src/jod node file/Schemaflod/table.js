const mongoose=require('mongoose')
const array1=new mongoose.Schema({
    JobCategory:{
        type:String,
    // required: true
    },
    Designation:{
        type:String,
    // required: true
    },
    Requirement:{
        type:Number,
    // required: true
    },
    JobDescription:{
        type:String,
    // required: true
    },
})
module.exports=mongoose.model('jobtable',array1)
