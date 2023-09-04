import { Provider } from "react-redux"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import { useAppDispatch, useAppSelector } from "./hooks"
import { store } from "./store"
import { setNumOne, setNumTwo, setNumThree, sum } from "./additionSlice"
import { setFirstNum, setSecondNum, setThirdNum, subtract } from "./subtractionSlice"

export default function Redux() {
	return (
		<Provider store={store}>
			<Box display="flex" flexDirection="column" alignItems="center">
				<h2>Redux</h2>
				<p>
					Redux provides a way to manage application state across descendent components. A
					single state store can be configured for the entire application's state,
					providing slices of state to the portions of the application that require them.
					Alternatively, a Redux store can be implemented any number of descendents away
					from the root component.
				</p>
				<AdditionChild />
			</Box>
		</Provider>
	)
}

function AdditionChild() {
	const state = useAppSelector((state) => state.addition)
	const dispatch = useAppDispatch()

	return (
		<>
			<h3>Addition Child</h3>
			<p>Addition Slice State: {JSON.stringify(state)}</p>
			<Stack direction="row" spacing={2}>
				<Button onClick={() => dispatch(setNumOne(1))} variant="outlined">
					Set Number One
				</Button>
				<Button onClick={() => dispatch(setNumTwo(2))} variant="outlined">
					Set Number Two
				</Button>
				<Button onClick={() => dispatch(setNumThree(3))} variant="outlined">
					Set Number Three
				</Button>
				<Button onClick={() => dispatch(sum())} variant="outlined">
					Sum the Numbers
				</Button>
			</Stack>
			<AdditionGrandchild />
		</>
	)
}

function AdditionGrandchild() {
	const dispatch = useAppDispatch()

	return (
		<>
			<h4>Addition Grandchild</h4>
			<Stack direction="row" spacing={2}>
				<Button onClick={() => dispatch(setNumOne(1))} variant="outlined">
					Set Number One
				</Button>
				<Button onClick={() => dispatch(setNumTwo(2))} variant="outlined">
					Set Number Two
				</Button>
				<Button onClick={() => dispatch(setNumThree(3))} variant="outlined">
					Set Number Three
				</Button>
				<Button onClick={() => dispatch(sum())} variant="outlined">
					Sum the Numbers
				</Button>
			</Stack>
			<AdditionGreatGrandchild />
			<SubtractionChild />
		</>
	)
}

function AdditionGreatGrandchild() {
	const dispatch = useAppDispatch()

	return (
		<>
			<h5>Addition Great Grandchild</h5>
			<Stack direction="row" spacing={2}>
				<Button onClick={() => dispatch(setNumOne(1))} variant="outlined">
					Set Number One
				</Button>
				<Button onClick={() => dispatch(setNumTwo(2))} variant="outlined">
					Set Number Two
				</Button>
				<Button onClick={() => dispatch(setNumThree(3))} variant="outlined">
					Set Number Three
				</Button>
				<Button onClick={() => dispatch(sum())} variant="outlined">
					Sum the Numbers
				</Button>
			</Stack>
		</>
	)
}

function SubtractionChild() {
	const state = useAppSelector((state) => state.subtraction)
	const dispatch = useAppDispatch()

	return (
		<>
			<h3>Subtraction Child</h3>
			<p>Subtraction Slice State: {JSON.stringify(state)}</p>

			<Stack direction="row" spacing={2}>
				<Button onClick={() => dispatch(setFirstNum(3))} variant="outlined">
					Set Number One
				</Button>
				<Button onClick={() => dispatch(setSecondNum(2))} variant="outlined">
					Set Number Two
				</Button>
				<Button onClick={() => dispatch(setThirdNum(1))} variant="outlined">
					Set Number Three
				</Button>
				<Button onClick={() => dispatch(subtract())} variant="outlined">
					Subtract the Numbers
				</Button>
			</Stack>

			<SubtractionGrandchild />
		</>
	)
}

function SubtractionGrandchild() {
	const dispatch = useAppDispatch()

	return (
		<>
			<h4>Subtraction Grandchild</h4>
			<Stack direction="row" spacing={2}>
				<Button onClick={() => dispatch(setFirstNum(3))} variant="outlined">
					Set Number One
				</Button>
				<Button onClick={() => dispatch(setSecondNum(2))} variant="outlined">
					Set Number Two
				</Button>
				<Button onClick={() => dispatch(setThirdNum(1))} variant="outlined">
					Set Number Three
				</Button>
				<Button onClick={() => dispatch(subtract())} variant="outlined">
					Subtract the Numbers
				</Button>
			</Stack>
			<SubtractionGreatGrandchild />
		</>
	)
}

function SubtractionGreatGrandchild() {
	const dispatch = useAppDispatch()

	return (
		<>
			<h5>Subtraction Great Grandchild</h5>
			<Stack direction="row" spacing={2}>
				<Button onClick={() => dispatch(setFirstNum(3))} variant="outlined">
					Set Number One
				</Button>
				<Button onClick={() => dispatch(setSecondNum(2))} variant="outlined">
					Set Number Two
				</Button>
				<Button onClick={() => dispatch(setThirdNum(1))} variant="outlined">
					Set Number Three
				</Button>
				<Button onClick={() => dispatch(subtract())} variant="outlined">
					Subtract the Numbers
				</Button>
			</Stack>
		</>
	)
}
