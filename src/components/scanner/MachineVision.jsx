import { AnimatePresence, motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import eye from '../../assets/icons/see.svg'
import { ScanContext } from '../../context/ScanProvider'
import ExitDialog from '../ExitDialog'
import Header from '../Header'
import Loader from '../Loader'
import Result from '../Result'
import VideoRenderer from './VideoRenderer'
import VisualScanner from './VisualScanner'
import ScanResult from './ScanResult'
import axios from 'axios'
import { UserContext } from '../../context/UserProvider'

const URL = import.meta.env.VITE_BACKEND_URL

const MachineVision = () => {

	const { dispatch } = useContext(UserContext)
	const { scanState: { isLoading, finished }, data } = useContext(ScanContext)
	const [isModalOpen, setIsModalOpen] = useState(false)

	// abort process handlers
	const handleScanAbort = () => {
		setIsModalOpen(true)
	}
	const confirmScanAbort = () => {
		dispatch({ type: 'restart' })
	}
	const cancelScanAbort = () => {
		setIsModalOpen(false)
	}

	useEffect(() => {
		if (!finished) return
		axios.get(`${URL}/api/scanResult`)
			.then((response) => {
				const { status, heart_rate, breath_rate, health_score } = response.data
				dispatch({
					type: 'completeScan',
					payload: {
						status: status,
						heartRate: heart_rate,
						breathRate: breath_rate,
						healthScore: health_score
					}
				})
			})
			.catch((error) => console.log(error))
	}, [finished])

	return (
		<>
			<VideoRenderer />
			<AnimatePresence>
				{
					isLoading
						? <Loader icon={eye} text='Visual Vibrome&#8482;' status='Loading...' key='loader' />
						: (
							<motion.div
								className='tw-flex tw-flex-col tw-flex-1'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: .8 }}
							>
								<ExitDialog
									isOpen={isModalOpen}
									onConfirmNav={confirmScanAbort}
									onCancelNav={cancelScanAbort}
									question='Are you sure you want to stop the scanning process?'
									disclaimer='Any unsaved progress will be lost'
									confirmText='Stop Scanning'
									cancelText='Continue Scanning'
								/>

								{
									!finished
										? (
											<>
												<Header process='machine vision' abort={handleScanAbort} />
												<div className='mask'></div>
												{data && <VisualScanner />}
											</>
										)
										: <ScanResult />
								}
							</motion.div>
						)
				}
			</AnimatePresence>
		</>
	)
}

export default MachineVision