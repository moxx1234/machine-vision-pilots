import React, { useContext, useEffect, useState } from 'react'
import qrIcon from '../../assets/icons/qr.svg'
import { UserContext } from '../../context/UserProvider'
import IconButton from '../IconButton'
import ProcessAborter from '../ProcessAborter'
import InjuryForm from '../injury/InjuryForm'
import InjuryHeader from '../injury/InjuryHeader'
import ResultStatus from './ResultStatus'
import ExitDialog from '../ExitDialog'
import Result from '../Result'
import { formatDate } from '../../helpers/formatDate'

const colors = {
	urgent: 'tw-bg-[rgb(236,45,48)]/15',
	priority: 'tw-bg-[rgb(254,155,14)]/15',
	routine: 'tw-bg-[rgb(7,187,79)]/15',
}

const ScanResult = () => {
	const { state: { user, userInfo: { status } }, dispatch } = useContext(UserContext)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [showQr, setShowQr] = useState(false)
	const timeStamp = new Date()

	useEffect(() => {
		setTimeout(() => {
			setShowQr(true)
		}, 3000)
	}, [])

	const handleAbort = () => {
		setIsModalOpen(true)
	}
	const handleQrClick = () => {
		setShowQr(true)
	}

	const confirmRestart = () => {
		dispatch({ type: 'restart' })
	}
	const cancelRestart = () => {
		setIsModalOpen(false)
	}

	return (
		!showQr
			? (
				<>
					<ExitDialog
						isOpen={isModalOpen}
						onConfirmNav={confirmRestart}
						onCancelNav={cancelRestart}
						question='Are you sure you want to restart scanning?'
						confirmText='Yes'
						cancelText='No'
					/>
					<div className='tw-absolute tw-top-8 tw-left-0'>
						<ProcessAborter text='Scanning Results' onClick={handleAbort} />
					</div>
					<div className='tw-flex-1 tw-flex tw-flex-col tw-px-20 tw-pt-24 tw-pb-11'>
						<div className='tw-flex-1 tw-flex tw-flex-col tw-gap-8 tw-bg-gradient-to-r tw-from-[#EFF8FFB2]/70 tw-to-white/[.63] tw-p-9 tw-rounded-3xl'>
							<InjuryHeader
								title={`Tactical Casualty Care Card - ${user}`}
								anchor={<IconButton icon={qrIcon} text='qr code' onClick={handleQrClick} />}
								timeStamp={formatDate(timeStamp)}
							/>
							<div className='tw-flex-1 tw-flex tw-gap-11'>
								<div className='tw-basis-[65%]'>
									<InjuryForm readonly={true} type='full' />
								</div>
								<div className={`tw-flex-1 tw-px-6 tw-pt-6 tw-rounded-3xl ${colors[status]}`}>
									<ResultStatus />
								</div>

							</div>
						</div>
					</div>
				</>
			)
			: <Result qrUrl='https://www.google.com' />
	)
}

export default ScanResult