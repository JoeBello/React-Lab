import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
	numOne: null | number
	numTwo: null | number
	numThree: null | number
	sum: null | number
}

const initialState: InitialState = {
	numOne: null,
	numTwo: null,
	numThree: null,
	sum: null,
}

const additionSlice = createSlice({
	name: "house",
	initialState,
	reducers: {
		setNumOne: (state, action: PayloadAction<number>) => {
			state.numOne = state.numOne === action.payload ? null : action.payload
		},
		setNumTwo: (state, action: PayloadAction<number>) => {
			state.numTwo = state.numTwo === action.payload ? null : action.payload
		},
		setNumThree: (state, action: PayloadAction<number>) => {
			state.numThree = state.numThree === action.payload ? null : action.payload
		},
		sum: (state) => {
			const { numOne, numTwo, numThree } = state
			let result: number | null = null

			;[numOne, numTwo, numThree].forEach((num) => {
				if (result === null && num !== null) {
					result = num
				} else if (result !== null && num !== null) {
					result += num
				}
			})

			state.sum = result
		},
	},
})

export const { setNumOne, setNumTwo, setNumThree, sum } = additionSlice.actions

export default additionSlice.reducer
