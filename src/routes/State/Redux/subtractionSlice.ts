import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
	numOne: null | number
	numTwo: null | number
	numThree: null | number
	difference: null | number
}

const initialState: InitialState = {
	numOne: null,
	numTwo: null,
	numThree: null,
	difference: null,
}

const subtractionSlice = createSlice({
	name: "subtraction",
	initialState,
	reducers: {
		setFirstNum: (state, action: PayloadAction<number>) => {
			state.numOne = state.numOne === action.payload ? null : action.payload
		},
		setSecondNum: (state, action: PayloadAction<number>) => {
			state.numTwo = state.numTwo === action.payload ? null : action.payload
		},
		setThirdNum: (state, action: PayloadAction<number>) => {
			state.numThree = state.numThree === action.payload ? null : action.payload
		},
		subtract: (state) => {
			const { numOne, numTwo, numThree } = state
			let result: number | null = null

			;[numOne, numTwo, numThree]
				.filter((num) => num !== null)
				.forEach((num) => {
					if (result === null) {
						result = num
					} else {
						result -= num as number
					}
				})

			state.difference = result
		},
	},
})

export const { setFirstNum, setSecondNum, setThirdNum, subtract } = subtractionSlice.actions

export default subtractionSlice.reducer
