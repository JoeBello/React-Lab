import { useReducer } from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"

enum ReducerStateChange {
	bicycle = "bicycle",
	motorcycle = "motorcycle",
	car = "car",
}

type Vehicle = {
	wheels: number
	engine: boolean
	topSpeed: string
	key: ReducerStateChange
}

const reducerStateOptions: { value: ReducerStateChange; label: string }[] = [
	{
		value: ReducerStateChange.bicycle,
		label: "Bicycle",
	},
	{
		value: ReducerStateChange.motorcycle,
		label: "Motorcycle",
	},
	{
		value: ReducerStateChange.car,
		label: "Car",
	},
]

function exampleReducer(state: Vehicle | null, action: ReducerStateChange | null) {
	const actions: { [key in ReducerStateChange]: Vehicle } = {
		[ReducerStateChange.bicycle]: {
			wheels: 2,
			engine: false,
			topSpeed: "10mph",
			key: ReducerStateChange.bicycle,
		},
		[ReducerStateChange.motorcycle]: {
			wheels: 2,
			engine: true,
			topSpeed: "200mph",
			key: ReducerStateChange.motorcycle,
		},
		[ReducerStateChange.car]: {
			wheels: 4,
			engine: true,
			topSpeed: "150mph",
			key: ReducerStateChange.car,
		},
	}

	return action ? actions[action] : null
}

export default function UseReducer() {
	const [exampleState, dispatch] = useReducer(exampleReducer, null)

	function handleReducerStateChange(
		event: React.MouseEvent<HTMLElement>,
		type: ReducerStateChange
	) {
		dispatch(type)
	}

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<h2>useReducer</h2>
			<p>
				`useReducer` provides a mechanism to manage more complex state values. Consider a
				state value that is an object with multiple properties, all of which align in a
				particular manner based on a single action within a component
			</p>
			<p>State: {JSON.stringify(exampleState)}</p>
			<Stack direction="row" spacing={2}>
				<ToggleButtonGroup
					color="primary"
					exclusive
					onChange={handleReducerStateChange}
					value={exampleState?.key}
				>
					{reducerStateOptions.map(({ value, label }) => (
						<ToggleButton key={value} value={value}>
							{label}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			</Stack>
		</Box>
	)
}
