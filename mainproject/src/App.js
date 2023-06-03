import './App.css';
import Loginpage from './components/Loginpage';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Books2 from './components/Books2'
import UserProfile from './components/UserProfile';
import AddBook from './components/Admin/AddBook';
import Admin from './components/Admin/Admin';
import Books from './components/Admin/Books';
import Dashboard from './components/Admin/Dashboard';
import Members from './components/Admin/Members';
import BookDetails from './components/Bookdetails';
import UpdateForm from './components/Admin/UpdateForm';









function App() {
  {/*const [open, setOpen] = useState(false);*/}   
  return (
    <div className="App">
      {/* <Loginpage></Loginpage> */}
      {/* <Signup></Signup> */}
     
       {/* <Homepage/>  */}
       {/* <Books2></Books2> */}
       {/* <UserProfile></UserProfile> */}




      
      {/* <AddBook></AddBook>
      {/* <Admin></Admin>   ???? */}
      {/* <Books></Books>    */}
      {/* <Dashboard></Dashboard> */}
      {/* <Members></Members>  unfinished */}
      

      <Routes>
       
         <Route path='/' element={<Homepage/>}></Route>
        <Route path='/login' element={<Loginpage/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/viewbook' element={<Books2/>}></Route>
        <Route path='/book/:id' element={<BookDetails/>}></Route> 

         <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/viewuser' element={<Members/>}></Route>
        <Route path='/books' element={<Books/>}></Route>
        <Route path='/addbooks' element={<AddBook/>}></Route> 
        <Route path='/update/:id' element={<UpdateForm/>}></Route> 


      </Routes>
    </div>
  );
}

export default App;
