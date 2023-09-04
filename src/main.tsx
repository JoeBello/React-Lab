import React from "react"
import ReactDOM from "react-dom/client"
import Container from "@mui/material/Container"
import { Toaster } from "react-hot-toast"
import { Router } from "./routes"

import "./root.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<>
			<Toaster />
			<Container maxWidth="lg">
				<Router />
			</Container>
		</>
	</React.StrictMode>
)
