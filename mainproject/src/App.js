import './App.css';
import Loginpage from './components/Loginpage';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Homepage from './components/Homepage';
import BooksStore from './components/BooksStore';
import AdminLogin from './components/AdminLogin';







function App() {
  {/*const [open, setOpen] = useState(false);*/}
  return (
    <div className="App">
      {/* <Loginpage></Loginpage> */}
      {/* <Signup></Signup> */}
      <SideBar />
       {/* <Homepage/>  */}
      {/* <BooksStore/> */}
      {/* <AdminLogin></AdminLogin> */}
      

      
      

      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/login' element={<Loginpage/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/admin' element={<AdminLogin/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
