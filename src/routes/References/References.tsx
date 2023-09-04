import { useRef, useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

export default function References() {
	const exampleRef = useRef("Value A")
	const [renderCount, setrRenderCount] = useState(1)

	function handleChangeRef() {
		exampleRef.current = exampleRef.current === "Value A" ? "Value B" : "Value A"
	}

	function handleRerender() {
		setrRenderCount(renderCount + 1)
	}

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<h2>useRef</h2>
			<Typography sx={{ mb: 2 }}>
				`useRef` enables components to create references that don't effect rendering and,
				therefore, don't need to be managed as state. Because refs are not included in
				React's rendering cycle, changing their values, via `ref.current`, does not cause a
				rerender. However, updated ref values will be reflected once a rerender occurs.
			</Typography>
			<Typography sx={{ mb: 1 }}>Render count: {renderCount}</Typography>
			<Typography sx={{ mb: 2 }}>Current ref value: {exampleRef.current}</Typography>
			<Stack direction="row" spacing={2}>
				<Button onClick={handleChangeRef} variant="outlined">
					Change ref value
				</Button>
				<Button onClick={handleRerender} variant="outlined">
					Rerender
				</Button>
			</Stack>
		</Box>
	)
}
