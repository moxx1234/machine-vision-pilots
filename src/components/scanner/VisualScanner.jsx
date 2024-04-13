import { useContext } from 'react'
import info from '../../assets/icons/info.svg'
import success from '../../assets/icons/success.svg'
import { ScanContext } from '../../context/ScanProvider'
import FaceScanProgress from './FaceScanProgress'
import FaceStats from './FaceStats'

const VisualScanner = () => {
	const { data } = useContext(ScanContext)
	const { in_roi, message, heart_rate, breath_rate, energy_meter } = data

	return (
		<div className='tw-flex-1 tw-flex tw-items-center tw-self-stretch'>
			<div className='column-1/3 tw-flex tw-justify-center'>
				<div className='tw-max-w-[640px] tw-flex tw-flex-col tw-gap-14 tw-justify-center tw-items-between tw-px-16'>
					{!!in_roi && <FaceStats animated={true} heartRate={heart_rate} breathRate={breath_rate} energyMeter={energy_meter} />}
				</div>
			</div>
			<div className='tw-flex-1 tw-flex tw-flex-col tw-self-end tw-items-center tw-pb-10 column-1/3'>
				<p className='tw-bg-white tw-rounded-full tw-py-3 tw-px-4 tw-flex tw-gap-3'>
					<img src={in_roi ? success : info} alt="info icon" className='w-8 h-8' />
					<span className='tw-text-xl'>{message || 'Your face must be inside the frame'}</span>
				</p>
			</div>
			<div className='column-1/3 tw-flex tw-justify-center'>
				<div className='tw-max-w-[640px] tw-flex tw-flex-col tw-gap-14 tw-justify-center tw-items-between tw-px-16'>
					{!!in_roi && <FaceScanProgress />}
				</div>
			</div>
		</div>
	)
}

export default VisualScanner