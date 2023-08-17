import {useState,useEffect} from 'react';
import './App.css'
import {useNavigate} from "react-router-dom"
import axios from 'axios';

function Table(){
    
       const navigate = useNavigate();
       const [data, setData] = useState([
        // { id: 1, JobCategory: 'Engineering',Designation: '3D Rigger & Animator', Requirement: 25 },
        // { id: 2, JobCategory: 'Healthcare',Designation: 'Medical Coder, Senior Medical Coder and QA', Requirement: 30 },
        // { id: 3, JobCategory: 'Engineering',Designation: '3D Animator', Requirement: 35 },
        // { id: 4, JobCategory: 'Medical',Designation: 'Medical Coder', Requirement: 28 }
      ]); 

      let i=1;   

      function getdatafun(){
        axios.get('http://localhost:7070/get1')
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        })
    }


  

      const [filter, setFilter] = useState('');
      const handleFilterChange = (event) => {
        setFilter(event.target.value);
      }
    
      // const filteredRows = data.filter(row => row.JobCategory.toLowerCase().includes(filter.toLowerCase()));

      const filteredRows = data.filter((row) =>row.JobCategory && row.JobCategory.toLowerCase().includes(filter.toLowerCase()));


      useEffect(()=>{
        getdatafun()
        // const filteredRows = data.filter((row) => row.JobCategory.some(
        //   (value)=>value.toLowerCase().includes(filter.toLowerCase())
        //   ));setFilter(filteredRows)},[data,filter],[]
      },[]
          )



    return (
              <div>
                <center>
                  <div className='search'>
                <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter by job Category" className='search1'  /> </div>
<br></br>
                <table>
        <thead className='headtab'>
          <tr>
            <th>S.No</th>
            <th>Job Category</th>
            <th>Designation</th>
            <th>Requirement</th>
            <th>Job Description</th>
            <th>Apply</th>
          </tr>
        </thead>
        <tbody>
          {/* {filteredRows.map(row => (
            <tr key={row.id}>
                <td>{i++}</td>
              <td>{row.JobCategory}</td>
              <td>{row.Designation}</td>
              <td>{row.Requirement}</td>
              <td><button onClick={()=>navigate("/Descrption")}>{row.JobDescription}View</button></td>
              <td><button onClick={()=>navigate("/Form")}>{row.Apply}Apply</button></td>
              </tr>
          ))} */}
                    {filteredRows.map(ex => (
            <tr key={ex._id}>
                <td>{i++}</td>
              <td>{ex.JobCategory}</td>
              <td>{ex.Designation}</td>
              <td>{ex.Requirement}</td>
              <td><button onClick={()=>navigate("/Descrption")}>View</button></td>
              <td><button onClick={()=>navigate("/Form")}>Apply</button></td>
              </tr>
          ))}


 
        </tbody>

      </table><br></br>



        <button className='btnadd1' onClick={()=>navigate("/AddItems")}>Add Items</button>
            </center>

            </div>
    )
}
export default Table;
