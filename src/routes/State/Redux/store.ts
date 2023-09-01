import { configureStore } from "@reduxjs/toolkit"
import additionReducer from "./additionSlice"
import subtractionReducer from "./subtractionSlice"

export const store = configureStore({
	reducer: {
		addition: additionReducer,
		subtraction: subtractionReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
