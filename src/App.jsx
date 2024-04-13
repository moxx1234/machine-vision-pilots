import { useContext } from "react"
import Background from "./components/Background"
import MachineVision from "./components/scanner/MachineVision"
import ScanProvider from "./context/ScanProvider"
import { UserContext } from "./context/UserProvider"
import OTPForm from "./components/form/OTPForm"

const App = () => {
	const { state: { user } } = useContext(UserContext)

	return (
		<div className="tw-w-full tw-h-full tw-relative tw-flex tw-flex-col tw-flex-1">
			<Background />

			{
				!user
					? <OTPForm />
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