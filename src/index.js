import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Menu from './pages/Menu';
import Pesanan from './pages/Pesanan';
import Profil from './pages/Profil';
import 'typeface-montserrat';
import { Navbar } from './component/Navbar';

const router = createBrowserRouter([
  {
    element: <Beranda />,
    path:'/'
  },
  {
    element: <Menu/>,
    path:'/menu'
  },
  {
    element: <Pesanan/>,
    path:'/pesanan'
  },
  {
    element: <Profil/>,
    path:'/profil'
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Navbar />
  </React.StrictMode>
);
