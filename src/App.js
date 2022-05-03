import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import ManageInventory from './Pages/Manage Inventory/ManageInventory';
import ManageItems from './Pages/ManageItems/ManageItems';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import AddItems from './Pages/AddItems/AddItems';
import MyItems from './Pages/MyItems/MyItems';
import Register from './Pages/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import RequiredAuth from './Pages/Shared/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className='flex bg-site'>
      <Header/>
      <div className='w-full'>
        <Routes className=''>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/home#inventory' element={<Home/>}></Route>
          <Route path='/manage-inventory' element={<ManageInventory/>}></Route>
          <Route path='/manage-items' element={<RequiredAuth><ManageItems/></RequiredAuth>}></Route>
          <Route path='/add-items' element={<RequiredAuth><AddItems/></RequiredAuth>}></Route>
          <Route path='/my-items' element={<RequiredAuth><MyItems/></RequiredAuth>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
