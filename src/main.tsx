import React from "react"
import ReactDOM from "react-dom/client"
import Container from "@mui/material/Container"
import { Router } from "./routes"

import "./root.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Container maxWidth="md">
            <Router />
        </Container>
    </React.StrictMode>
)
