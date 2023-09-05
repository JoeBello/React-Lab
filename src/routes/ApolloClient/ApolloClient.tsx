import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { Outlet } from "react-router-dom"

export default function ApolloClient() {
	return (
		<>
			<Box display="flex" flexDirection="column" alignItems="center">
				<Typography variant="h2" sx={{ mb: 2 }}>
					Apollo Client
				</Typography>
				<Typography sx={{ mb: 2 }}>
					Apollo Client provides mechanisms to interact with GraphQL APIs via various
					hooks, as well as the ability to manage application state through Apollo
					Client's caching APIs.
				</Typography>
			</Box>
			<Outlet />
		</>
	)
}
