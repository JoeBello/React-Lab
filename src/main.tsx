import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root, rootLoader } from './routes/Root'
import './root.css'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        loader: rootLoader
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
