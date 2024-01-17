import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.scss'
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
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
