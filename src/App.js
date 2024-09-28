import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import LoginUser from './components/LoginUser';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import UserRegister from './components/UserRegister';
import Adminlogin from './components/Adminlogin';
import Menu from './components/Menu';
import StaffLogin from './components/StaffLogin';
import LoginHome from './components/LoginHome';
import Dashboard from './components/Dashboard';
import AdminDash from './components/AdminDash';


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<HomePage/>}/>
   <Route path='/userlogin' element={<LoginUser/>}/>
   <Route path='/register' element={<UserRegister/>}/>
   <Route path='/adminlogin' element={<Adminlogin/>}/>
   <Route path='/menu' element={<Menu/>}/>
   <Route path='/stafflogin' element={<StaffLogin/>}/>
   <Route path='/lhome' element={<LoginHome/>}/>
   <Route path='/dash' element={<Dashboard/>}/>
   <Route path='/admindash' element={<AdminDash/>}/>

   
   
   </Routes>
   </BrowserRouter>
  );
}

export default App;
