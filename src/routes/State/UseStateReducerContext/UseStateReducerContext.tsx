// import { createContext, useContext, useState } from "react"
import { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete"
import Divider from "@mui/material/Divider"
import EditIcon from "@mui/icons-material/Edit"
import Input from "@mui/material/Input"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import {
	ActionType,
	Item,
	Provider,
	useDispatchContext,
	useItemsContext,
} from "./UseStateReducerContextContext"

export default function UseStateReducerContext() {
	return (
		<Provider>
			<UseReducerUseContextParent />
		</Provider>
	)
}

function UseReducerUseContextParent() {
	const items = useItemsContext()

	return (
		<>
			<Box display="flex" flexDirection="column" alignItems="center">
				<h2>useReducer + useContext</h2>
				<Typography sx={{ mb: 2 }}>
					`useReducer` and `useContext` can be used together to centralize some portion of
					potentially complex application state in a single component. The state bearing
					component exists outside of the presentational components and enables the
					presentational components within the context of that state to modify the state
					using disptatched actions.
				</Typography>
				{items?.map((i, idx) => (
					<Typography key={i.label} sx={{ my: 1 }}>
						{idx + 1}: {i?.label}
					</Typography>
				))}
			</Box>
			<UseReducerUseContextChild />
		</>
	)
}

function UseReducerUseContextChild() {
	const dispatch = useDispatchContext()
	const [value, setValue] = useState("")

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const {
			target: { value },
		} = event

		setValue(value)
	}

	function handleSubmit() {
		dispatch({ type: ActionType.create, label: value })
		setValue("")
	}

	return (
		<>
			<Box display="flex" flexDirection="column" alignItems="center">
				<h3>useReducer + useContext Child</h3>
				<Stack direction="row" spacing={2}>
					<Input
						color="primary"
						onChange={handleChange}
						placeholder="Add an item"
						size="small"
						value={value}
					/>
					<Button onClick={handleSubmit}>Add</Button>
				</Stack>
			</Box>
			<UseReducerUseContextGrandChild />
		</>
	)
}

function UseReducerUseContextGrandChild() {
	const dispatch = useDispatchContext()
	const items = useItemsContext()
	const [editing, setEditing] = useState<Item | null>(null)
	const [value, setValue] = useState("")

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const {
			target: { value },
		} = event

		setValue(value)
	}

	function handleDelete(item: Item) {
		dispatch({ type: ActionType.delete, ...item })
	}

	function handleEdit(item: Item) {
		setValue(item.label)
		setEditing(item)
	}

	function handleSubmit() {
		editing && dispatch({ type: ActionType.update, id: editing.id, label: value })
		setValue("")
		setEditing(null)
	}

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<h4>useReducer + useContext Grandchild</h4>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<List sx={{ width: "100%" }}>
					{items?.map((i) => (
						<ListItem key={i?.label}>
							<ListItemButton disableRipple>
								<ListItemIcon>
									<DeleteIcon sx={{ mr: 2 }} onClick={() => handleDelete(i)} />
									<EditIcon sx={{ mr: 2 }} onClick={() => handleEdit(i)} />
								</ListItemIcon>

								{editing?.id === i.id && (
									<>
										<Input
											color="primary"
											onChange={handleChange}
											placeholder="Add an item"
											value={value}
											fullWidth
										/>
										<Button onClick={handleSubmit}>Save</Button>
									</>
								)}
								{editing?.id !== i.id && <ListItemText primary={i.label} />}
							</ListItemButton>
							<Divider />
						</ListItem>
					))}
				</List>
			</Box>
		</Box>
	)
}
