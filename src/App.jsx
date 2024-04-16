import { useContext } from "react"
import Background from "./components/Background"
import UserForm from "./components/UserForm"
import MachineVision from "./components/scanner/MachineVision"
import ScanProvider from "./context/ScanProvider"
import { UserContext } from "./context/UserProvider"

const App = () => {
	const { state: { user, injurySubmitted } } = useContext(UserContext)

	return (
		<div className="tw-w-full tw-h-full tw-relative tw-flex tw-flex-col tw-flex-1">
			<Background />

			{
				(!user || !injurySubmitted)
					? <UserForm />
					: (
						<ScanProvider>
							<MachineVision />
						</ScanProvider>
					)
			}
		</div>
	)
}

export default App