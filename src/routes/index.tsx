import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ErrorElement } from "../components/pages"
import Shell from "../Shell"
import { Context } from "./Context"
import { References } from "./References"
import { SideEffects } from "./SideEffects"
import { State } from "./State"
import GpsFixedIcon from "@mui/icons-material/GpsFixed"
import FlareIcon from "@mui/icons-material/Flare"
import PsychologyIcon from "@mui/icons-material/Psychology"
import SurroundSoundIcon from "@mui/icons-material/SurroundSound"

export const routes = [
	{
		path: "/context",
		element: <Context />,
		errorElement: <ErrorElement />,
		label: "Context",
		Icon: SurroundSoundIcon,
	},
	{
		path: "/references",
		element: <References />,
		errorElement: <ErrorElement />,
		label: "References",
		Icon: GpsFixedIcon,
	},
	{
		path: "/side-effects",
		element: <SideEffects />,
		errorElement: <ErrorElement />,
		label: "Side Effects",
		Icon: FlareIcon,
	},
	{
		path: "/state",
		element: <State />,
		errorElement: <ErrorElement />,
		label: "State",
		Icon: PsychologyIcon,
	},
]

const router = createBrowserRouter([
	{
		path: "",
		element: <Shell />,
		errorElement: <ErrorElement />,
		children: [...routes],
	},
])

export const Router = function Router() {
	return <RouterProvider router={router} />
}
