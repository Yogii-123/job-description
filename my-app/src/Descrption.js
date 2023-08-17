import './App.css'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';


function Describtion(){
    const navigate = useNavigate();
    // const [getdata1,setgetdata1]=useState([]);
    const [adddata1,setadddata1]=useState([]);


    function getdatafun(){
        axios.get('http://localhost:7070/get1')
        .then((res)=>{
            console.log(res.data);
            setadddata1(res.data)
        })
    }
    useEffect(()=>{
        getdatafun()
    },[])

    // function newfun(){
    //     axios.get('http://localhost:7071/get1')
    //     .then((res)=>{
    //         console.log(res.data);
    //         setgetdata1(res.data)
    //     })
    // }
    // useEffect(()=>{
    //     newfun()
    // },[])


    return(
        <div className="div1">
        <div className="desdiv">
            <center>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus scelerisque nisl. Cras pellentesque, lacus eu interdum lacinia, lectus arcu imperdiet magna, at dignissim purus sapien in mauris. Curabitur a cursus augue, nec faucibus neque. Cras ut ullamcorper leo, at sagittis metus. Mauris et volutpat diam. Vivamus tristique finibus odio vitae efficitur. Integer ornare scelerisque justo, sed facilisis risus molestie vitae. Donec dictum purus eget dignissim auctor. Phasellus et lacus eleifend lacus posuere tempor. Integer tincidunt mauris id ex pellentesque, sit amet lacinia tellus aliquet. Phasellus enim tellus, vehicula nec diam ut, cursus pharetra lorem. Curabitur imperdiet lectus ac accumsan maximus. Vivamus rhoncus, purus ut sodales pulvinar, orci ex ultricies arcu, nec venenatis augue libero in nisi.</p>
            <br></br>
            <h4>Required skill</h4>
            <p>
                {adddata1.map((abc)=>{
                    <tr>
                        < td>{abc.JobDescription}</td>
                    </tr>

                })}
            </p>

            <button onClick={()=>navigate("/")}>ok</button>
</center>
        </div>
        </div>
    )
}
export default Describtion;