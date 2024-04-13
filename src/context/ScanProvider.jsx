import { createContext, useEffect, useRef, useState } from "react"
import { socket } from "../api/socket"

const stageDuration = 5000
const totalStages = 4

export const ScanContext = createContext()

const ScanProvider = ({ children }) => {
	const [stage, setStage] = useState(0)
	const [data, setData] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const stageIntervalId = useRef(null)

	useEffect(() => {
		// socket connection
		socket.connect()
		socket.emit('start_stream')
		socket.once('video_frame', () => setIsLoading(false))
		socket.on('data_response', data => { setData(data) })

		// start interval for changes of scan stages
		const stageInterval = setInterval(() => {
			setStage(prev => prev + 1)
		}, stageDuration)
		stageIntervalId.current = stageInterval

		return () => {
			socket.off('data_response')
			if (socket.connected) socket.disconnect()
			clearInterval(stageIntervalId.current)
		}
	}, [])

	useEffect(() => {
		if (!data?.in_roi) setStage(0)
		if (stage === totalStages) {
			// disconnect socket
			socket.off('data_response')
			socket.disconnect()

			// stop scan stages flow
			clearInterval(stageIntervalId.current)
		}
	}, [stage, data?.in_roi])

	const providerValue = {
		scanState: {
			isLoading,
			stage,
			finished: stage === totalStages
		},
		data
	}


	return (
		<ScanContext.Provider value={providerValue}>
			{children}
		</ScanContext.Provider>
	)
}

export default ScanProvider