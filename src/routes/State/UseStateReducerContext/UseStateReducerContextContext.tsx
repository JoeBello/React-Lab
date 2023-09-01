import { createContext, useContext, useReducer } from "react"
import { nanoid } from "nanoid"

export enum ActionType {
	create = "create",
	update = "update",
	delete = "delete",
}

export interface Item {
	id?: string
	label: string
}

interface Action extends Item {
	type: ActionType
}

type Items = Item[]

function reducer(items: Items, action: Action) {
	switch (action.type) {
		case ActionType.create: {
			return [
				...items,
				{
					id: nanoid(),
					label: action.label,
				},
			]
		}
		case ActionType.update: {
			return items.map((item) => {
				if (item.id === action.id) {
					return {
						id: item.id,
						label: action.label,
					}
				} else {
					return item
				}
			})
		}
		case ActionType.delete: {
			return items.filter(({ id }) => id !== action.id)
		}
		default: {
			return items
		}
	}
}

const initialItems: Items = [
	{
		id: nanoid(),
		label: "Create a reducer with the necessary actions to manage your state",
	},
	{
		id: nanoid(),
		label: "Create a Provider component that encapsulates the provided React children",
	},
	{
		id: nanoid(),
		label: "Create a State context, via createContext, with a representation of the initial state as the intial value",
	},
	{
		id: nanoid(),
		label: "Create a Dispatch context, via createContext, with a null initial value",
	},
	{
		id: nanoid(),
		label: "Within the Provider component, retrieve the state value and dispatch function returned from calling useReducer with your reducer and the initial state value",
	},
	{
		id: nanoid(),
		label: "Within the Provider component, implment the State context Provider using the state value returned from the useReducer call",
	},
	{
		id: nanoid(),
		label: "Within the Provider component, and within the State context Provider, implement the Dispatch context Provider with the dispatch function returned from the useReducer call",
	},
	{
		id: nanoid(),
		label: "Within the Provider component, within the Dispatch context Provider, encapsulate the `children` passed to the Provider component",
	},
	{
		id: nanoid(),
		label: "Create a function to return the context value from the State context, via useContext",
	},
	{
		id: nanoid(),
		label: "Create a function to return the context value from the Dispatch context, via useContext",
	},
	{
		id: nanoid(),
		label: "The component(s) referenced by `children` will now exist within a context where they can access the State context value, which is the current state, and the Dispatch context value, which is the dispatch function to modify the current state, abstracting state management nearly entirely out of the presentational components",
	},
]

const ItemsContext = createContext<Items>([])

const DispatchContext = createContext<React.Dispatch<Action>>(() => null)

export function Provider({ children }: { children: React.ReactElement }) {
	const [items, dispatch] = useReducer(reducer, initialItems)

	return (
		<ItemsContext.Provider value={items}>
			<DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
		</ItemsContext.Provider>
	)
}

export function useItemsContext(): Item[] {
	return useContext(ItemsContext)
}

export function useDispatchContext(): React.Dispatch<Action> {
	return useContext(DispatchContext)
}
