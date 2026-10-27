import { useState } from 'react'
import './styles/Globals.css';


import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider  } from 'react-router'
import HomeLayout from './layouts/HomeLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Receipts from './pages/Receipts';
import ReceiptForm from './pages/ReceiptForm';
import LoginForm from './pages/LoginForm';
import AdminRegisterForm from './pages/AdminRegisterForm';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import ReceiptDetails from './pages/ReceiptDetails';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >

      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home/>} />
        <Route path='receipts' element={<Receipts/>} />
        <Route path='new-receipt' element={<ReceiptForm/>} />
        <Route path='receipt-details' element={<ReceiptDetails/>} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route>

      <Route path='login' element={<LoginForm/>} />
      <Route path='add-user' element={<AdminRegisterForm/>} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="change-password" element={<ChangePassword />} />

      <Route path="*" element={<NotFound/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
