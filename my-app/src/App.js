import './App.css';
// import Tryfile from './Tryfile';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Table from './Table';
import Form from './Form';
import Descrption from './Descrption';
import AddItems from './AddItems';
import AddTable from './AddTable';


function App() {
  return (
    <div>
{/* <Tryfile></Tryfile> */}

      <BrowserRouter>
               <Routes>
                 <Route path='/'element={<Table ></Table>}></Route>
                 <Route path="Form" element={<Form></Form>}></Route>
                 <Route path="Descrption" element={<Descrption></Descrption>}></Route>
                 <Route path="AddItems" element={<AddItems></AddItems>}></Route>
                 <Route path="AddTable" element={<AddTable></AddTable>}></Route>
               </Routes>
          </BrowserRouter>


    </div>
  );
}

export default App;
