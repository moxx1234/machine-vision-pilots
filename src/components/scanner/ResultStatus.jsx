import React, { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import FaceStats from './FaceStats'

const colors = {
	urgent: 'tw-bg-[#EC2D30]',
	priority: 'tw-bg-[#fe9b0e]',
	routine: 'tw-bg-[#07BB4F]',
}

const ResultStatus = () => {
	const { state: { userInfo: { status, heartRate, breathRate, healthScore } } } = useContext(UserContext)

	return (
		<>
			<h2 className='tw-mb-11 tw-uppercase tw-text-[#09101D] tw-text-xl tw-font-semibold tw-text-center'>Health Status</h2>
			<div className={`tw-mb-11 tw-flex tw-flex-col tw-items-center tw-px-4 tw-py-6 tw-rounded-2xl tw-text-white tw-uppercase ${colors[status]}`}>
				<p className='tw-font-semibold'>Overall condition</p>
				<p className='tw-text-[44px] tw-font-bold tw-tracking-wider'>{status}</p>
			</div>
			<div className='tw-flex tw-flex-col tw-gap-14'>
				<FaceStats heartRate={heartRate} breathRate={breathRate} energyMeter={healthScore} />
			</div>
		</>
	)
}

export default ResultStatus