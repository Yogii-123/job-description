const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const bodyParser=require('body-parser')

const app = express();
// const upload = multer();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



// Configure email transporter
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'sudhapriya762001@gmail.com', // Replace with your Gmail email address
//     pass: 'Priya@2000', // Replace with your Gmail email password
//   },
// });
// app.post('/send-email', upload.array('files'), async (req, res) => {
//     try {
//       const { recipient, subject, message } = req.body;
//       const attachments = req.files.map((file) => ({
//         filename: file.originalname,
//         content: file.buffer,
//       }));
  
//       // Send email
//       await transporter.sendMail({
//         from: data.email, // Replace with your Gmail email address
//         to: 'sudhapriya762001@gmail.com',
//         subject,
//         text: message,
//         attachments,
//       });
  
//     //   res.sendStatus(200);
//     } catch (error) {
//       console.error(error);
//     //   res.sendStatus(500);
//     }
//   });






app.get('/',()=>{
  resizeBy.send('welcome')
})
app.post('/api/forma',(req,res)=>{
  let data=req.body
  let smtpTransport=nodemailer.createTransport({
    service:'Gmail',
    port:465,
    auth:{
      user:'sudhapriya762001@gmail.com',
      pass:'Priya@2000'
    }

  });

  let mailOptions={
    form:data.email,
    to:'sudhapriya762001@gmail.com',
    subject:`message from ${data.name}`,
    html:`
    <h3> information </h3>
    <ul>
     <li>Name:${data.name}</li>
     <li>Name:${data.lastname}</li>
     <li>Name:${data.email}</li>
     </ul>
     <h3>Message</h3>
     <p>${data.message}</p>`
  }

  smtpTransport.sendMail(mailOptions,(error,res)=>{
    if(error){
      res.send(error)
    }
    else{
      res.send('send')
    }
  })
  smtpTransport.close();

})

  
  let PORT=process.env.PORT||3001;
app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
})