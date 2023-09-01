import { Provider } from "react-redux"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { useAppDispatch, useAppSelector } from "./hooks"
import { store } from "./store"
import { setNumOne, setNumTwo, setNumThree, sum } from "./additionSlice"
import { setFirstNum, setSecondNum, setThirdNum, subtract } from "./subtractionSlice"

export default function Redux() {
	return (
		<Provider store={store}>
			<Box>
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
			<Box>
				<h3>Addition Child</h3>
				<p>Addition Slice State: {JSON.stringify(state)}</p>
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
			</Box>
			<AdditionGrandchild />
		</>
	)
}

function AdditionGrandchild() {
	const dispatch = useAppDispatch()

	return (
		<>
			<Box>
				<h4>Addition Grandchild</h4>
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
			</Box>
			<AdditionGreatGrandchild />
			<SubtractionChild />
		</>
	)
}

function AdditionGreatGrandchild() {
	const dispatch = useAppDispatch()

	return (
		<Box>
			<h5>Addition Great Grandchild</h5>
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
		</Box>
	)
}

function SubtractionChild() {
	const state = useAppSelector((state) => state.subtraction)
	const dispatch = useAppDispatch()

	return (
		<>
			<Box>
				<h3>Subtraction Child</h3>
				<p>Subtraction Slice State: {JSON.stringify(state)}</p>
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
			</Box>
			<SubtractionGrandchild />
		</>
	)
}

function SubtractionGrandchild() {
	const dispatch = useAppDispatch()

	return (
		<>
			<Box>
				<h4>Subtraction Grandchild</h4>
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
			</Box>
			<SubtractionGreatGrandchild />
		</>
	)
}

function SubtractionGreatGrandchild() {
	const dispatch = useAppDispatch()

	return (
		<Box>
			<h5>Subtraction Great Grandchild</h5>
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
		</Box>
	)
}
