import { createContext, useReducer } from 'react'

export const UserContext = createContext()

const initialState = {
	user: '',
	userInfo: {
		status: '',
		heartRate: null,
		breathRate: null,
		healthScore: null,
	},
	complaintAreas: {
		head: [],
		body: []
	},
	injurySubmitted: false
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'identify': return { ...state, user: action.payload }
		case 'complaint': return { ...state, complaintAreas: action.payload }
		case 'submitInjuries': return { ...state, injurySubmitted: true }
		case 'completeScan': return { ...state, userInfo: action.payload }
		case 'restart': return { ...initialState }
		default: throw new Error('unknown user context action')
	}
}

const UserProvider = ({ children }) => {

	const [state, dispatch] = useReducer(reducer, initialState)

	const providerValue = { state, dispatch }

	return (
		<UserContext.Provider value={providerValue}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider