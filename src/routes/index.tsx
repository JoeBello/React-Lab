import { createBrowserRouter, RouterProvider } from "react-router-dom"
import FlareIcon from "@mui/icons-material/Flare"
import GpsFixedIcon from "@mui/icons-material/GpsFixed"
import PsychologyIcon from "@mui/icons-material/Psychology"
import SchemaIcon from "@mui/icons-material/Schema"
import SurroundSoundIcon from "@mui/icons-material/SurroundSound"
import { ApolloClient } from "./Apollo Client"
import { Context } from "./Context"
import { ErrorElement } from "../components/pages"
import { References } from "./References"
import { SideEffects } from "./SideEffects"
import { State } from "./State"
import Shell from "../Shell"

export const routes = [
	{
		path: "/apollo-client",
		element: <ApolloClient />,
		errorElement: <ErrorElement />,
		label: "Apollo Client",
		Icon: SchemaIcon,
	},
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
