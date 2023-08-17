import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
function Form(){
    const [Name,setName]=useState();
    const [Email,setEmail]=useState();            
    const [Phone,setPhone]=useState();
    const [Describtion,setDescribtion]=useState();
    const [Resume,setResume]=useState();

    const navigate = useNavigate();

    function qualfun(e){
        setName(e.target.value)
    }

    function Email1(e){
        setEmail(e.target.value)
    }
    function Phonefun(e){
        setPhone(e.target.value)
    }
    function pinfun(e){
        setDescribtion(e.target.value)
    }
    function handleFile(e){
        console.log(e.target.files[0]);
        setResume(e.target.files[0]);
    }
    function handleUpload(e){
        e.preventDefault();
        // const formdata=new FormData();
        // formdata.append( 'Name',Name),     
        // formdata.append( 'Email',Email),     
        // formdata.append( 'Phone',Phone),     
        // formdata.append( 'Describtion',Describtion),     
        // formdata.append( 'Resume',Resume),     
       
        axios.post("http://localhost:7070/post",
        {
            Name:Name,
            Email:Email,
            Phone:Phone,
            Describtion:Describtion,
            Resume:Resume,     
           }
        )
        .then((res)=>{
            console.log(res.data);
            console.log("data posted");
            navigate("/")

        })

        // function getdata1(){
        //     axios.get("http://localhost:9000/get")
      
        //      .then((res)=>{
        //       console.log("get data");
        //       setfirst(res.data)
      
        //      })};
        // useEffect(()=>{
        //     getdata1();
        //    },[]);
    
      


   }
    return(
        <div className='overdiv'>
            <center>

            <h3 className='head'>Details</h3>
            <form onSubmit={handleUpload}>        


             <label >Name
                    <input type='text'  onChange={qualfun} required/>
                </label><br></br>

                <label>Email
                    <input type='email'  onChange={Email1} required/>
                </label><br></br>
                

                <label>Phone
                        <input type='text' onChange={Phonefun} required/>
                 </label><br></br>

                <label className='deslable' htmlFor='des1'> Description</label>
                <textarea type='text'id='des1' onChange={pinfun} required className='desinp'></textarea>
<br></br>

               
                <label>Resume
                <input type='file' name='filename' onChange={handleFile} className='fileup' required/> 
                </label> 
                
                 <br></br>
                 <label>submit
                 <input type="submit"/>

                 </label>

            </form>
</center>
        </div>
    )
}
export default Form;