import { useQuery, gql } from "@apollo/client"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"

const GET_ALL_CHARACTERS = gql`
	query AllPeople($page: Int) {
		characters(page: $page) {
			results {
				id
				image
				name
			}
		}
	}
`

type Character = {
	id: string
	image: string
	name: string
}

type AllCharacters = {
	characters: {
		results: Character[]
	}
}

export default function Queries() {
	const { loading, error, data } = useQuery<AllCharacters>(GET_ALL_CHARACTERS, {
		variables: { page: 1 },
	})

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<Typography variant="h2" sx={{ mb: 2 }}>
				Queries
			</Typography>
			<Typography sx={{ mb: 2 }}>
				The following data is fetched immediately after the component is mounted, via
				Apollo's `useQuery` hook. `useQuery` returns an object comprised of `loading`,
				`error`, and `data` references.
			</Typography>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				p={2}
				my={2}
				sx={{ width: "100%", border: "3px solid", borderColor: "secondary.main" }}
			>
				<Typography variant="h3" sx={{ mb: 3 }}>
					Query Status
				</Typography>
				<Stack
					direction="row"
					spacing={2}
					sx={{ width: "100%", mb: 2 }}
					justifyContent="space-around"
				>
					<Typography variant="h4">Loading: {JSON.stringify(loading)}</Typography>
					<Typography variant="h4">Error: {error?.message || "undefined"}</Typography>
				</Stack>
			</Box>
			{data && (
				<Grid container direction="row" spacing={2} justifyContent="center">
					{data?.characters?.results?.map(({ id, image, name }) => {
						return (
							<Grid item key={`${id}-${name}`}>
								<Card sx={{ maxWidth: "300px" }}>
									<CardMedia component="img" image={image} />
									<CardContent>
										<Typography variant="h6" textAlign="center">
											{name}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						)
					})}
				</Grid>
			)}
		</Box>
	)
}
