import image from '../../assets/img/injury/head-right.png'
import HeadRightAreas from './areas/HeadRightAreas'

const FieldRight = () => {
	return (
		<div className='tw-flex-1 tw-flex tw-relative'>
			<img src={image} alt="" className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-contain' />
			<div className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full'>
				<HeadRightAreas />
			</div>
		</div>
	)
}

export default FieldRight