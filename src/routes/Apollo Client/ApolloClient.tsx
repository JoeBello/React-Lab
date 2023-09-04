import { useState } from "react"
import { useQuery, gql } from "@apollo/client"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const GET_ALL_PEOPLE_AND_FILMS = gql`
	query AllPeople {
		allPeople {
			edges {
				node {
					name
					id
					filmConnection {
						edges {
							node {
								id
								title
							}
						}
					}
				}
			}
		}
	}
`

type AllPeopleAndFilms = {
	allPeople: {
		edges: {
			node: {
				name: string
				id: string
				filmConnection: {
					edges: {
						node: {
							id: string
							title: string
						}
					}[]
				}
			}
		}[]
	}
}

export default function ApolloClient() {
	const [hideInitialData, setHideInitialData] = useState(false)
	const { loading, error, data } = useQuery<AllPeopleAndFilms>(GET_ALL_PEOPLE_AND_FILMS)

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<Typography variant="h2" sx={{ mb: 2 }}>
				Apollo Client
			</Typography>
			<Typography sx={{ mb: 2 }}>
				Apollo Client provides mechanisms to interact with GraphQL APIs via various hooks,
				as well as the ability to manage application state through Apollo Client's caching
				APIs.
			</Typography>
			<Typography sx={{ mb: 2 }}>
				The following data is fetched immediately after the component is mounted, via
				Apollo's `useQuery` hook. `useQuery` returns an object comprised of `loading`,
				`error`, and `data`.
			</Typography>
			<Typography variant="h3" sx={{ mb: 3 }}>
				Query Status
			</Typography>
			<Stack direction="column" spacing={2} sx={{ width: "100%", mb: 2 }}>
				<Typography variant="h4">Loading: {JSON.stringify(loading)}</Typography>
				<Typography variant="h4">Error: {error?.message || "undefined"}</Typography>
				<Typography variant="h4">Data: {data ? "" : "undefined"}</Typography>
			</Stack>
			{!hideInitialData && (
				<Stack direction="column" spacing={2} sx={{ width: "100%", ml: 4 }}>
					{data?.allPeople?.edges?.map(({ node }) => {
						return (
							<div key={`${node.id}-${node.name}`}>
								<Typography variant="h5">
									Name: {node.name}
									<br />
									Films:{" "}
								</Typography>
								<ul>
									{node.filmConnection?.edges?.map(({ node }) => (
										<li key={`${node.id}=${node.title}`}>{node.title}</li>
									))}
								</ul>
							</div>
						)
					})}
				</Stack>
			)}
		</Box>
	)
}
