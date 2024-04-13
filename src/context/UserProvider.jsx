import { createContext, useReducer } from 'react'

export const UserContext = createContext()

const reducer = (state, action) => {
	switch (action.type) {
		case 'identify': return { ...state, user: action.payload }
		case 'complaint': return { ...state, complaintAreas: action.payload }
		case 'completeScan': return { ...state, userInfo: action.payload }
		default: throw new Error('unknown user context action')
	}
}

const UserProvider = ({ children }) => {
	const initialState = {
		user: '',
		userInfo: {
			status: '',
			heartRate: null,
			breathRate: null,
			healthScore: null,
		},
		complaintAreas: {
			head: {},
			body: {},
		},
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	const providerValue = { state, dispatch }

	return (
		<UserContext.Provider value={providerValue}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider