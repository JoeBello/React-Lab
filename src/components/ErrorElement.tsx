import { useRouteError } from "react-router-dom"

export default function ErrorElement() {
	const error = useRouteError() as Error
	console.log({
		error
	})

	return (
		<div>
			<h1>Ooops</h1>
		</div>
	)
}