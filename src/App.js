
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Login from './pages/Login';
import AdminLayout from './components/AdminLayout';
import UserManagement from './pages/AdminPage/UserManagement';
import Booking from './pages/AdminPage/Booking';
import Dashboard from './pages/AdminPage/Dashboard';
import CrewManagement from './pages/AdminPage/CrewManagement';
import ShiftScheduling from './pages/AdminPage/ShiftScheduling';
import AddNew from './pages/AdminPage/AddNew';





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Admin' element={<AdminLayout/>}/>
      <Route path='/Admin/User' element={<UserManagement/>}/>
      <Route path='/Admin/Dashboard' element={<Dashboard/>}/>
      <Route path='/Admin/Booking' element={<Booking/>}/>
      <Route path='/Admin/User/CrewManagement' element={<CrewManagement/>}/>
      <Route path='/Admin/User/ShiftScheduling' element={<ShiftScheduling/>}/>
      <Route path='/Admin/User/CrewManagement/AddNew' element={<AddNew/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
