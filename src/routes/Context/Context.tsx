import { createContext, useContext } from "react"
import Box from "@mui/material/Box"

const ExampleContext = createContext({ value: "Initial value" })

function SubComponentA() {
	const something = useContext(ExampleContext)

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<h2>SubComponentA</h2>
			<span>Value: {something.value}</span>
			<p>
				Because SubComponentA exists outside of a context provider, the values within its
				context are those that were used to initialize the context via `createContext`
			</p>
		</Box>
	)
}

function SubComponentB() {
	const something = useContext(ExampleContext)

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<h2>SubComponentB</h2>
			<span>Value: {something.value}</span>
			<p>
				Because SubComponentB exists within the top-level context provider, and outside of
				the nested context provider, the values within its context are those that have been
				defined by the top-level context provider
			</p>
		</Box>
	)
}

function SubComponentC() {
	const something = useContext(ExampleContext)

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<h2>SubComponentC</h2>
			<span>Value: {something.value}</span>
			<p>
				Because SubComponentC exists within the nested context provider, and also because
				React components search up the component tree for the nearest context provider, the
				values within its context are those that have been defined by the nested context
				provider
			</p>
		</Box>
	)
}

export default function Context() {
	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<SubComponentA />
			<ExampleContext.Provider value={{ value: "Top-level provider value" }}>
				<SubComponentB />
				<ExampleContext.Provider value={{ value: "Nested provider value" }}>
					<SubComponentC />
				</ExampleContext.Provider>
			</ExampleContext.Provider>
		</Box>
	)
}
