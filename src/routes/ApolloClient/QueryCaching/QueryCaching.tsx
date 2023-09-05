import { useState } from "react"
import { useQuery, useLazyQuery, gql } from "@apollo/client"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const GET_ALL_CHARACTERS = gql`
	query GetAllCharacters($page: Int) {
		characters(page: $page) {
			results {
				id
				name
			}
		}
	}
`

const GET_CHARACTER = gql`
	query GetCharacter($id: ID!) {
		character(id: $id) {
			id
			image
			name
		}
	}
`

type Character = {
	character: {
		id: string
		name: string
		image: string
	}
}

type CharacterOption = {
	id: string
	name: string
}

type AllCharacters = {
	characters: {
		results: CharacterOption[]
	}
}

export default function Queries() {
	const [selected, setSelected] = useState("")
	const { loading, error, data } = useQuery<AllCharacters>(GET_ALL_CHARACTERS, {
		variables: { page: 1 },
	})

	const [
		queryCharacter,
		{ loading: characterLoading, error: characterError, data: characterData },
	] = useLazyQuery<Character>(GET_CHARACTER)

	const loadingStatus = loading || characterLoading
	const errorStatus = !!(error || characterError)

	async function handleChange(event: SelectChangeEvent) {
		const {
			target: { value: id },
		} = event

		setSelected(id)
		await queryCharacter({ variables: { id } })
	}

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<Typography variant="h3" sx={{ mb: 2 }}>
				Query Caching
			</Typography>
			<Typography sx={{ mb: 2 }}>
				Start by selecting an option from the following menu, while observing the Loading
				status. Next, select another option. Finally, select the original option while
				observing the Loading status again. Notice that loading is not required when a
				previous option is selected for a second time. This is because of Apollo's cache.
				Apollo is able to identify cached resources using the provided variables.
			</Typography>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				p={2}
				my={2}
				sx={{ width: "100%", border: "3px solid", borderColor: "secondary.main" }}
			>
				<Typography variant="h4" sx={{ mb: 3 }}>
					Query Status
				</Typography>
				<Stack
					direction="row"
					spacing={2}
					sx={{ width: "100%", mb: 2 }}
					justifyContent="space-around"
				>
					<Typography variant="h5">Loading: {JSON.stringify(loadingStatus)}</Typography>
					<Typography variant="h5">Error: {JSON.stringify(errorStatus)}</Typography>
				</Stack>
			</Box>
			{data && (
				<FormControl sx={{ width: "50%" }}>
					<InputLabel id="character-search-label">Select a Character</InputLabel>
					<Select
						labelId="character-search-label"
						id="character-search-select"
						value={selected}
						label="Select a Character"
						onChange={handleChange}
					>
						{data.characters.results.map(({ id, name }) => (
							<MenuItem key={`${id}-${name}`} value={id}>
								{name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			)}
			{characterData && (
				<Card sx={{ my: 6, maxWidth: "300px" }}>
					<CardMedia component="img" image={characterData.character.image} />
					<CardContent>
						<Typography variant="h6" textAlign="center">
							{characterData.character.name}
						</Typography>
					</CardContent>
				</Card>
			)}
		</Box>
	)
}
