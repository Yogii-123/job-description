import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddTable(){
    const [adddata1,setadddata1]=useState([]);
    const navigate=useNavigate();
    let i=1


    function getdatafun(){
        axios.get('http://localhost:7070/get1')
        .then((res)=>{
            console.log(res.data);
            setadddata1(res.data)
        })
    }

    function delfun(_id){
        axios.delete(`http://localhost:7070/del1/${_id}`)
        .then((res)=>{
            console.log(res.data);
        })

    }

    useEffect(()=>{
        getdatafun()
    },[])


    return(
        <div>
                            <table>
        <thead className='headtab'>
          <tr>
            <th>S.No</th>
            <th>Job Category</th>
            <th>Designation</th>
            <th>Requirement</th>
            <th>Job Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {adddata1.map(ex => (
            <tr key={ex._id}>
                <td>{i++}</td>
              <td>{ex.JobCategory}</td>
              <td>{ex.Designation}</td>
              <td>{ex.Requirement}</td>
              <td>{ex.JobDescription}</td>
              <td><button onClick={()=>delfun(ex._id)}>Delete</button></td>
              </tr>
          ))}

        </tbody>
      </table><br></br>
      <button onClick={()=>navigate("/")}>Add</button>

        </div>


    )
}
export default AddTable;