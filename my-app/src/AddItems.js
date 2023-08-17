import axios from "axios";
import { useState } from "react";
import './App.css'
import {useNavigate} from "react-router-dom"


function AddItems(){
    const navigate = useNavigate();
    const [JobCategory,setJobCategory]=useState();
    const [Designation,setDesignation]=useState();
    const [Requirement,setRequirement]=useState();
    const [JobDescription,setJobDescription]=useState();

    function JobCategoryfun(e){
        setJobCategory(e.target.value);
    }
    function Designationfun(e){
        setDesignation(e.target.value)
    }
    function Requirementfun(e){
        setRequirement(e.target.value)
    }
    function JobDescriptionfun(e){
        setJobDescription(e.target.value)
    }

    function subfun1(e){
        e.preventDefault();
    axios.post("http://localhost:7070/post1",
    {
        JobCategory:JobCategory,
        Designation:Designation,
        Requirement:Requirement,
        JobDescription:JobDescription
    }
    ).then((res)=>{
        console.log(res.data);
        navigate("/AddTable")
       })

}
    return(
        <div>
            <form onSubmit={subfun1}>
                <label>Job Category
                    <input type="text" onChange={JobCategoryfun} value={JobCategory}></input>
                </label>
                <label>Designation
                    <input type="text" onChange={Designationfun} value={Designation}></input>
                </label>
                <label>Requirement
                    <input type="number" onChange={Requirementfun} value={Requirement}></input>
                </label><br></br>
                    {/* <label>Job Description
                        <textarea className="textarea-input" onChange={JobDescriptionfun} value={JobDescription}></textarea>
                    </label> */}
                <label className="textarea-wrapper">Job Description
                    <textarea className="textarea-input" onChange={JobDescriptionfun} value={JobDescription}></textarea>
                        <button onClick={()=>navigate("/Descrption")} className="submit-btn">Submit</button>
                </label><br></br>
                <label>Submit
                    <input type="submit"></input>
                </label>
            </form>

        </div>
    )
}
export default AddItems;