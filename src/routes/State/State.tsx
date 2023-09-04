import { useState } from "react"
import Box from "@mui/material/Box"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import Redux from "./Redux"
import UseState from "./UseState"
import UseStateContext from "./UseStateContext"
import UseReducer from "./UseReducer"
import UseStateReducerContext from "./UseStateReducerContext"

enum StateType {
	useState = "useState",
	useStateContext = "useStateContext",
	useReducer = "useReducer",
	useReducerContext = "useReducerContext",
	redux = "redux",
}

const stateTypeOptions: { value: StateType; label: string }[] = [
	{
		value: StateType.useState,
		label: "useState",
	},
	{
		value: StateType.useStateContext,
		label: "useState + useContext",
	},
	{
		value: StateType.useReducer,
		label: "useReducer",
	},
	{
		value: StateType.useReducerContext,
		label: "useReducer + useContext",
	},
	{
		value: StateType.redux,
		label: "Redux",
	},
]

export default function State() {
	const [stateType, setStateType] = useState<StateType | null>(null)

	function handleStateTypeChange(event: React.MouseEvent<HTMLElement>, newStateType: StateType) {
		setStateType(newStateType)
	}

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<h1>State</h1>
			<ToggleButtonGroup
				color="primary"
				exclusive
				onChange={handleStateTypeChange}
				value={stateType}
			>
				{stateTypeOptions.map(({ value, label }) => (
					<ToggleButton key={value} value={value}>
						{label}
					</ToggleButton>
				))}
			</ToggleButtonGroup>
			{stateType === StateType.useState && <UseState />}
			{stateType === StateType.useStateContext && <UseStateContext />}
			{stateType === StateType.useReducer && <UseReducer />}
			{stateType === StateType.useReducerContext && <UseStateReducerContext />}
			{stateType === StateType.redux && <Redux />}
		</Box>
	)
}
