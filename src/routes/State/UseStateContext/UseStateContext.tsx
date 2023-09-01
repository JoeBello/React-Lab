import { createContext, useContext, useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

enum ExampleStateEnum {
	hello = "Hello",
	goodbye = "Goodbye",
}

type State = null | ExampleStateEnum

type Context = {
	exampleState: State
	setExampleState: React.Dispatch<React.SetStateAction<State>>
}

const ExampleContext = createContext<Context>({
	exampleState: null,
	setExampleState: () => null,
})

export default function UseStateContext() {
	const [exampleState, setExampleState] = useState<State>(null)

	return (
		<ExampleContext.Provider
			value={{
				exampleState,
				setExampleState,
			}}
		>
			<Box display="flex" flexDirection="column" alignItems="center">
				<h2>useState + useContext</h2>
				<p>
					`useState` can be used in conjunction with `useContext` to centralize state in a
					top-level component and enable descendent components to modify that state
					without having to pass state setting callbacks down through multiple components
					(prop drilling).
				</p>
				<p>State value: {exampleState ? exampleState : JSON.stringify(exampleState)}</p>
				<UseStateContextChild />
			</Box>
		</ExampleContext.Provider>
	)
}

function UseStateContextChild() {
	const { setExampleState } = useContext(ExampleContext)

	return (
		<>
			<h3>useState + useContext Child</h3>
			<Stack direction="row" spacing={2}>
				<Button onClick={() => setExampleState(ExampleStateEnum.hello)} variant="outlined">
					{`setState("${ExampleStateEnum.hello}")`}
				</Button>
				<Button
					onClick={() => setExampleState(ExampleStateEnum.goodbye)}
					variant="outlined"
				>
					{`setState("${ExampleStateEnum.goodbye}")`}
				</Button>
			</Stack>
			<UseStateContextGrandchild />
		</>
	)
}

function UseStateContextGrandchild() {
	const { setExampleState } = useContext(ExampleContext)

	return (
		<>
			<h4>useState + useContext Grandchild</h4>
			<Stack direction="row" spacing={2}>
				<Button onClick={() => setExampleState(ExampleStateEnum.hello)} variant="outlined">
					{`setState("${ExampleStateEnum.hello}")`}
				</Button>
				<Button
					onClick={() => setExampleState(ExampleStateEnum.goodbye)}
					variant="outlined"
				>
					{`setState("${ExampleStateEnum.goodbye}")`}
				</Button>
			</Stack>
		</>
	)
}
