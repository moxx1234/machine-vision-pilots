import React, { useContext } from 'react'
import StageProgress from './StageProgress'
import FaceCanvas from './FaceCanvas'
import FaceMesh3d from './FaceMesh3d'
import { ScanContext } from '../../context/ScanProvider'

const stages = [null, 'Scanning regions of interest', 'Creating a face map', 'Creating 3D face model']

const FaceScanProgress = () => {
	const { scanState } = useContext(ScanContext)
	const { stage } = scanState

	return (
		<div className='tw-flex tw-flex-col tw-gap-3'>
			<div className='tw-bg-[#fff]/40 tw-p-6 tw-rounded-3xl tw-text-center'>
				<StageProgress />
			</div>
			<div className='tw-bg-[#fff]/40 tw-p-6 tw-rounded-3xl tw-text-center'>
				<div className='tw-h-80'>
					<FaceCanvas />
					{/* {stage < 3 ?
						<FaceCanvas landmarks={marks} facemap={facemap} stage={stage} />
						: <FaceMesh3d points={mesh} />
					} */}
				</div>
				<p>{stages[stage]}</p>
			</div>
		</div>
	)
}

export default FaceScanProgress