import { useEffect, useState } from "react"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CircleIcon from "@mui/icons-material/Circle"
import ListItemText from "@mui/material/ListItemText"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import toast from "react-hot-toast"

const USE_EFFECT_LIFECYCLES = [
	"`useEffect(() => {})` excludes the dependency array, resulting in the provided callback executing on the initial render and for every rerender of the encapsulating component. This behavior replicates the `componentDidUpdate` lifecycle method of class components.",
	"`useEffect(() => {}, [])` includes an empty dependency array, which will result in the provided callback executing only on the initial render of the encapsulating component. This behavior replicates the `componentDidMount` lifecycle method of class components.",
	"`useEffect(() => {}, [dep1, ...])` includes a populated dependency array, which will limit the execution of the provided callback to instances where the value of any of the included dependencies has changed. This behavior replicates the `componentWillUnmount` lifecycle method of class components.",
]

export default function SideEffects() {
	const [stateA, setStateA] = useState(1)
	const [stateB, setStateB] = useState(1)

	function handleStateChangeA() {
		setStateA(stateA + 1)
	}

	function handleStateChangeB() {
		setStateB(stateB + 1)
	}

	useEffect(() => {
		if (stateB > 3) {
			toast.custom(
				<>
					<AutoAwesomeIcon sx={{ color: "purple", mr: 1 }} />
					<Typography>stateB: {stateB}</Typography>
					<AutoAwesomeIcon sx={{ color: "purple", ml: 1 }} />
				</>
			)
		}
	}, [stateB])

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<h2>useEffect</h2>
			<Typography sx={{ mb: 2 }}>
				`useEffect` provides a way for components to introduce side effects. Depending on
				what, if any, dependencies are provided to `useEffect`, the provided callback will
				execute when those dependencies change or at certain points during the component's
				lifecycle.
			</Typography>
			{USE_EFFECT_LIFECYCLES.map((content, idx) => (
				<ListItemText key={`${idx}-${content}`} sx={{ mb: 2 }}>
					<CircleIcon sx={{ fontSize: ".5rem", mr: 1 }} />
					{content}
				</ListItemText>
			))}
			<Stack direction="row" spacing={3}>
				<Typography sx={{ mb: 1, fontSize: "1.5rem" }}>stateA: {stateA}</Typography>
				<Typography sx={{ mb: 2, fontSize: "1.5rem" }}>stateB: {stateB}</Typography>
			</Stack>

			<Stack direction="row">
				<Button onClick={handleStateChangeA} variant="outlined">
					Increment `stateA` (no side effect)
				</Button>
				<Button onClick={handleStateChangeB} variant="outlined">
					Imcrement `stateB` (side effect when stateB {">"} 3)
				</Button>
			</Stack>
		</Box>
	)
}
