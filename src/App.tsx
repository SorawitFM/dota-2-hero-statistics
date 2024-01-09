import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './page/home';

function App() {



  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
      ),
    },
  ]);

  return (
    <div className='bg-warning'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
