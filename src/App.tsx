import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './page/home';
import DetailPage from './page/detail';

function App() {



  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
      ),
    },
    {
      path: "/detail/:name",
      element: <DetailPage />,
    },
  ]);

  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1567360425618-1594206637d2?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      height: 'auto'
    }}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
