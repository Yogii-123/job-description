const express=require('express');
const mongoose=require('mongoose');
const jobtable = require('./Schemaflod/table.js');
const cors=require('cors');
const app=express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());
mongoose.connect('mongodb://0.0.0.0:27017/jobtable',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('connected db');
    }
})
app.post('/post1',async(req,res)=>{
    const add1=new jobtable({
        JobCategory:req.body.JobCategory,
        Designation:req.body.Designation,
        Requirement:req.body.Requirement,
        JobDescription:req.body.JobDescription,
    })
    add1.save();
    res.json('posted')
})
app.get('/get1',async(req,res)=>{
    const get2=await jobtable.find();
    res.json(get2)
})
app.get('/get/:id',async(req,res)=>{
    const getid1=await jobtable.findById(req.params.id)
    res.json(getid1)
})
app.delete('/del/:id',async(req,res)=>{
    await jobtable.findByIdAndDelete(req.params.id)
})

let port=7071;
app.listen(port,function(err){
    if(err) console.log('error');
    console.log('server listening on '+port);
})

