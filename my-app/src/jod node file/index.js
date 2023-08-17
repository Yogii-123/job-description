const express=require('express');
const mongoose=require('mongoose');

const jobform = require('./Schemaflod/schemafile');
const jobtable = require('./Schemaflod/table.js');


const cors=require('cors');
const app=express();
const multer  = require('multer');
const path=require('path');
const fs=require('fs')

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const MIME_TYPES = {
    'file/pdf': 'pdf',
    // 'file/jpeg': 'jpeg',
    // 'file/png': 'png'
}


app.use(cors());
mongoose.connect('mongodb://0.0.0.0:27017/jobform',(err)=>{
    // mongoose.connect('mongodb+srv://myusername:mypassword@crud.cvewg.mongodb.net/mywebsiteDB?retryWrites=true&w=majority',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('connected');
    }
})

const storage=multer.diskStorage({
    // destination:'uploads'
    destination:function(req,file,cb){
          cb(null,'uploads');
    },
    filename:function(req,file,cb){
        const extension = MIME_TYPES[file.mimetype];
        cb(null,file.originalname+extension);
        // cb(null,file.filename+'_'+Date.now()+'.'+path.extname(file.originalname));

    }
})
const upload= multer({
    storage:storage,
    });
    // single('testimage');

    // const storage = multer.diskStorage({
    //     destination: (req, file, cb) => {
    //         cb(null, DIR);
    //     },
    //     filename: (req, file, cb) => {
    //         const fileName = file.originalname.toLowerCase().split(' ').join('-');
    //         cb(null, uuidv4() + '-' + fileName)
    //     }
    // });
    
    // var upload = multer({
    //     storage: storage,
    //     fileFilter: (req, file, cb) => {
    //         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    //             cb(null, true);
    //         } else {
    //             cb(null, false);
    //             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    //         }
    //     }
    // });
    



app.post('/post',upload.single('Resume'),async(req,res)=>{
    const add=new jobform({
        Name:req.body.Name,
        Email:req.body.Email,
        Phone:req.body.Phone,
        Describtion:req.body.Describtion,
        Resume:req.body.filename,
    })
    add.save();

    // .then(result => {
    //     res.status(201).json({
    //         message: "User registered successfully!",
    //         userCreated: {
    //             _id: result._id,
    //             Resume: result.profileImg
    //         }
    //     })
    // })
    res.json('posted')
})

app.get('/get',async(req,res)=>{
    const get1=await jobform.find();
    res.json(get1);
})

app.get('/get/:id',async(req,res)=>{
    const getid=await jobform.findById(req.params.id)
    res.json(getid)
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
app.get('/get1/:id',async(req,res)=>{
    const get1id1=await jobtable.findById(req.params.id)
    res.json(get1id1)
})

app.delete('/del1/:id',async(req,res)=>{
    await jobtable.findByIdAndDelete(req.params.id)
    res.json('deleted')
})



let port=7070;
app.listen(port,function(err){
    if(err) console.log('error');
    console.log('server listening on '+port);
})