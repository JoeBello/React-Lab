import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ErrorElement } from "../components/pages"
import { App, appLoader } from "./App"
import { Context } from "./Context"
import { State } from "./State"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: appLoader,
        errorElement: <ErrorElement />,
    },
    {
        path: "/context",
        element: <Context />,
        errorElement: <ErrorElement />,
    },
    {
        path: "/state",
        element: <State />,
        errorElement: <ErrorElement />,
    },
])

export const Router = function Router() {
    return <RouterProvider router={router} />
}
