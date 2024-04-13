import { useEffect, useState } from 'react'
import cardio from '../../assets/icons/cardio.svg'
import wave from '../../assets/icons/wave.svg'
import FaceStatsItem from './FaceStatsItem'
import SemiCircle from './SemiCircle'

const FaceStats = ({ heartRate, breathRate, energyMeter, animated = false }) => {

	const [energyText, setEnergyText] = useState('high')

	useEffect(() => {
		if (energyMeter <= 1) setEnergyText('high')
		else if (energyMeter > 1 && energyMeter <= 2) setEnergyText('medium')
		else setEnergyText('low')
	}, [energyMeter])
	return (
		<>
			<FaceStatsItem value={heartRate} animated={animated} unit='min' name='heart rate' lineImg={cardio} />
			<FaceStatsItem value={breathRate} animated={animated} unit='min' name='breath rate' lineImg={wave} />
			<FaceStatsItem value={energyText} animated={animated} name='health score' animComponent={<SemiCircle value={parseInt(energyMeter) + Math.round(energyMeter)} />} />
		</>
	)
}

export default FaceStats