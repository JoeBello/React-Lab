import { createBrowserRouter, RouterProvider } from "react-router-dom"
import FlareIcon from "@mui/icons-material/Flare"
import GpsFixedIcon from "@mui/icons-material/GpsFixed"
import PsychologyIcon from "@mui/icons-material/Psychology"
import SchemaIcon from "@mui/icons-material/Schema"
import SearchIcon from "@mui/icons-material/Search"
import SurroundSoundIcon from "@mui/icons-material/SurroundSound"
import { ApolloClient, Queries, QueryCaching } from "./ApolloClient"
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
		children: [
			{
				path: "/apollo-client/queries",
				element: <Queries />,
				ErrorElement: <ErrorElement />,
				label: "Queries",
				Icon: SearchIcon,
			},
			{
				path: "/apollo-client/query-caching",
				element: <QueryCaching />,
				ErrorElement: <ErrorElement />,
				label: "Query Caching",
				Icon: SearchIcon,
			},
		],
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
