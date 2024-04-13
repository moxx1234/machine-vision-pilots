import React, { useContext } from 'react'
import qrIcon from '../../assets/icons/qr.svg'
import { UserContext } from '../../context/UserProvider'
import IconButton from '../IconButton'
import ProcessAborter from '../ProcessAborter'
import InjuryForm from '../injury/InjuryForm'
import InjuryHeader from '../injury/InjuryHeader'
import ResultStatus from './ResultStatus'

const colors = {
	urgent: 'tw-bg-[rgb(236,45,48)]/15',
	priority: 'tw-bg-[rgb(254,155,14)]/15',
	routine: 'tw-bg-[rgb(7,187,79)]/15',
}

const ScanResult = () => {
	const { state: { user, userInfo: { status } } } = useContext(UserContext)

	const handleAbort = () => {
		console.log('abort')
	}
	const handleQrClick = () => {
		console.log('qr')
	}

	return (
		<>
			<div className='tw-absolute tw-top-8 tw-left-0'>
				<ProcessAborter text='Scanning Results' onClick={handleAbort} />
			</div>
			<div className='tw-flex-1 tw-flex tw-flex-col tw-px-20 tw-pt-24 tw-pb-11'>
				<div className='tw-flex-1 tw-flex tw-flex-col tw-gap-8 tw-bg-gradient-to-r tw-from-[#EFF8FFB2]/70 tw-to-white/[.63] tw-p-9 tw-rounded-3xl'>
					<InjuryHeader
						title={`Tactical Casualty Care Card - ${user}`}
						anchor={<IconButton icon={qrIcon} text='qr code' onClick={handleQrClick} />}
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
}

export default ScanResult