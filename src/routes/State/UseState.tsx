import { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

enum ExampleStateEnum {
	hello = "Hello",
	goodbye = "Goodbye",
}

export default function UseState() {
	const [exampleState, setExampleState] = useState<ExampleStateEnum>(ExampleStateEnum.hello)
	const [counter, setCounter] = useState(0)

	function handleSetExampleState(
		event: React.MouseEvent<HTMLElement>,
		newExampleState: ExampleStateEnum
	) {
		setExampleState(newExampleState)
	}

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<h2>useState</h2>
			<p>
				`useState` provides local state management for a given component and is ideal for
				managing primitive state values.
			</p>
			<p>State value: {exampleState}</p>
			<Stack direction="row" spacing={2}>
				<Button
					onClick={(e) => handleSetExampleState(e, ExampleStateEnum.hello)}
					variant="outlined"
				>
					{`setState("${ExampleStateEnum.hello}")`}
				</Button>
				<Button
					onClick={(e) => handleSetExampleState(e, ExampleStateEnum.goodbye)}
					variant="outlined"
				>
					{`setState("${ExampleStateEnum.goodbye}")`}
				</Button>
			</Stack>
			<h3>useState Callback</h3>
			<p>
				`useState`'s set state method will also accept a callback instead of a value. When a
				callback is passed, the current state value stored by React is provided as an
				argument. This is useful in situations where a state value should be updated based
				on its current value, or the current state value needs to be modified multiple times
				before React has updated the instance of the component running in the DOM. Consider
				a counter, the value of which is stored in the component's state.
			</p>
			<p>Counter value: {counter}</p>
			<Stack direction="row" spacing={2}>
				<Button onClick={() => setCounter(counter - 1)} variant="outlined">
					-
				</Button>
				<Button onClick={() => setCounter(counter + 1)} variant="outlined">
					+
				</Button>
			</Stack>
			<p>
				The following decrement button will attempt to decrement the current Counter value 2
				times in succession, which will not work as expected. The outcome is due to the fact
				that the click handler must complete its execution before React will rerender the
				component running in the DOM, which means the reference to the Counter value becomes
				stale after the first time the click handler decrements the value. To remedy this,
				the increment handler will provide a callback to the set state method, providing it
				access to the most current Counter value.
			</p>
			<Stack direction="row" spacing={2}>
				<Button
					onClick={() => {
						setCounter(counter - 1)
						setCounter(counter - 1)
					}}
					variant="outlined"
				>
					- 2
				</Button>
				<Button
					onClick={() => {
						setCounter((c) => c + 1)
						setCounter((c) => c + 1)
					}}
					variant="outlined"
				>
					+ 2
				</Button>
			</Stack>
		</Box>
	)
}
