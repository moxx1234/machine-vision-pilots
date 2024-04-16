import image from '../../assets/img/injury/head-left.png'
import HeadLeftAreas from './areas/HeadLeftAreas'


const FieldLeft = () => {
	return (
		<div className='tw-flex-1 tw-flex tw-relative'>
			<img src={image} alt="" className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-contain' />
			<div className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full'>
				<HeadLeftAreas />
			</div>
		</div>
	)
}

export default FieldLeft