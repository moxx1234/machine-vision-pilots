import image from '../../assets/img/injury/head-back.png'
import HeadBackAreas from './areas/HeadBackAreas'

const FieldBack = () => {
	return (
		<div className='tw-flex-1 tw-relative'>
			<img src={image} alt="" className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-contain' />
			<div className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full'>
				<HeadBackAreas />
			</div>
		</div>
	)
}

export default FieldBack