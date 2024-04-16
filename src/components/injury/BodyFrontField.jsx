import image from '../../assets/img/injury/body-front.png'
import BodyFrontAreas from './areas/BodyFrontAreas'

const BodyFrontField = () => {

	return (
		<div className='tw-relative tw-flex-1'>
			<img src={image} alt="" className='tw-absolute tw-top-[1px] tw-left-0 tw-w-full tw-h-full tw-object-contain tw-object-top' />
			<div className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full'>
				<BodyFrontAreas />
			</div>
		</div>
	)
}

export default BodyFrontField