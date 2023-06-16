import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App, appLoader } from './routes/App'
import { ErrorElement } from './components'
import './root.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		loader: appLoader,
		errorElement: <ErrorElement />
	}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
