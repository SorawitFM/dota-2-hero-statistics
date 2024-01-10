import { useState } from 'react'

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
