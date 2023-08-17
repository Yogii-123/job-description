import { Component} from 'react';
import axios from 'axios';


// function Tryfile(){
    // const [data, setData] = useState([
    //     { id: 1, name: 'John', age: 25 },
    //     { id: 2, name: 'Jane', age: 30 },
    //     { id: 3, name: 'Mark', age: 35 },
    //     { id: 4, name: 'Sarah', age: 28 }
    //   ]);
    
    //   const [selectedRows, setSelectedRows] = useState([]);
    //   const [filter, setFilter] = useState('');
    
    //   // const handleRowSelection = (rowId) => {
    //   //   if (selectedRows.includes(rowId)) {
    //   //     setSelectedRows(selectedRows.filter(id => id !== rowId));
    //   //   } else {
    //   //     setSelectedRows([...selectedRows, rowId]);
    //   //   }
    //   // }
    
    //   const handleFilterChange = (event) => {
    //     setFilter(event.target.value);
    //   }
    
    //   const filteredRows = data.filter(row => row.name.toLowerCase().includes(filter.toLowerCase()));

    // const [filterValue, setFilterValue] = useState(""); // State to hold the filter value
    // const [data, setData] = useState([ // Sample data for the table
    //   { id: 1, item: "Item 1", category: "Category A" },
    //   { id: 2, item: "Item 2", category: "Category B" },
    //   { id: 3, item: "Item 3", category: "Category A" },
    //   { id: 4, item: "Item 4", category: "Category B" }
    // ]);
  
    // const handleFilterChange = (event) => {
    //   setFilterValue(event.target.value); // Update filter value in state
    // };
  
    // const filteredData = data.filter((row) =>
    //   row.item.toLowerCase().includes(filterValue.toLowerCase())
    // );


    // function Tryfile () {
//  this.state=[{
//   recipient:'',
//   subject:'',
//   message:'',
//   files:' ',
//   send:false
// }]


  //     const [recipient, setRecipient] = useState('');
  // const [subject, setSubject] = useState('');
  // const [message, setMessage] = useState('');
  // const [files, setFiles] = useState([]);

  // const handleRecipientChange = (e) => {
  //   setRecipient(e.target.value);
  // };

  // const handleSubjectChange = (e) => {
  //   setSubject(e.target.value);
  // };

  // const handleMessageChange = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleFileChange = (e) => {
  //   setFiles(e.target.files);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault()};

  //   // Create FormData to store form data and files
    // const formData = new FormData();
    // formData.append('recipient', recipient);
    // formData.append('subject', subject);
    // formData.append('message', message);
    // for (let i = 0; i < files.length; i++) {
    //   formData.append('files', files[i]);
    // }

    // Send form data and files to backend server
    // const response = await fetch('http://localhost:7071/send-email', {
    //   method: 'POST',
    //   body: formData,
    // });

    // Handle response from backend server
  //   if (response.ok) {
  //     alert('Email sent successfully!');
  //   } else {
  //     alert('Failed to send email. Please try again later.');
  //   }
  // };


   export default class Form extends Component{

    state={
      name:'',
      lastname:'',
      email:'',
      message:'',
      sent:false
    }

    handleName=(e)=>{
      this.setState({
        name:e.target.value
      })
    }
    handleLastname=(e)=>{
      this.setState({
        lastname:e.target.value
      })
    }
    handleEmail=(e)=>{
      this.setState({
        email:e.target.value
      })
    }
    handleMessage=(e)=>{
      this.setState({
        massage:e.target.value
      })
    }
    formSubmit=(e)=>{
      e.preventDefault();

      let data={
        name:this.state.name,
        lastname:this.state.lastname,
        email:this.state.email,
        message:this.state.message
      }

      // export default function apiCall(method, path, data) {
      //   console.log(method, url, data); 
      //   return new Promise((resolve, reject) => {
      //       return axios[post](path, data)
      //               .then(res => {
      //                   return resolve(res.data);
      //               })
      //               .catch((err) => {
      //                   console.log(err)
      //                   reject(err)})})

      //                   apiCall('POST', `${process.env.REACT_APP_BASE_URL}/`, {standard, subject, totalMarks, totalQuestions} )
      //   .then(data =>{
      //       console.log(data);

      //   })
      //   .catch(err=>{
      //       console.log(err);
      //       return this.props.addError(err.message)

      //   });

      axios.post('/api/form',data)
     .then(res =>{
        this.setState({
          sent:true,
        },this.resetForm())
      }).Catch(()=>{
        console.log("message not sent");
      })
    }

    resetForm=()=>{
      this.setState({
        name:'',
        lastname:'',
        email:'',
        message:''
      })
      setTimeout(()=>{
        this.setState({
          sent:false,
        })
      },3001)
    }



    render(){
    return(
        <div>
          {/* <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Recipient" value={recipient} onChange={handleRecipientChange} />
      <input type="text" placeholder="Subject" value={subject} onChange={handleSubjectChange} />
      <textarea placeholder="Message" value={message} onChange={handleMessageChange}></textarea>
      <input type="file" multiple onChange={handleFileChange} />
      <button type="submit">Send Email</button>
    </form> */}






                  {/* <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter by name" />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td> */}
              {/* <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleRowSelection(row.id)}
                />
              </td> */}
            {/* </tr>
          ))}
        </tbody>
      </table> */}
      {/* <div>
        <h4>Selected Rows:</h4>
        <ul>
          {selectedRows.map(rowId => (
            <li key={rowId}>{data.find(row => row.id === rowId)?.name}</li>
          ))}
        </ul>
      </div>
 */}




 {/* Email */}

           {/* <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Recipient" value={recipient} onChange={handleRecipientChange}/>
      <input type="text" placeholder="Subject" value={subject} onChange={handleSubjectChange} />
      <textarea placeholder="Message" value={message} onChange={handleMessageChange}></textarea>
      <input type="file" multiple onChange={handleFileChange} />
      <div className='msg'>
        Message has been sent
      </div>
      <button type="submit">Send Email</button>
    </form> */}



    <form  onSubmit={this.formSubmit}>
      <div>
        <label htmlFor='name'>name</label>
        <input type='text' name='name' placeholder='enter your name' value={this.state.name} onChange={this.handleName}/> 
      </div>
      <div>
        <label htmlFor='lastname'>Lastname</label>
        <input type='text' name='lastname' placeholder='enter your name' value={this.state.lastname} onChange={this.handleLastname}/>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' placeholder='enter your name' value={this.state.email} onChange={this.handleEmail}/>
      </div>
      <div>
        <label htmlFor='message'>Message</label>
        <textarea type='text' name='message' id='' cols="30" rows="5" value={this.state.message} onChange={this.handleMessage}/>
      </div>

      <div className={this.state.sent?'msg msgAppear':'msg'}>
        Message has been sent
      </div>

      <div>
        <button type='submit'>submit</button>
      </div>

    </form>


        </div>
    )
}
}

// export default Tryfile;

  // "proxy":"http://localhost:3001",
