import image from '../../assets/img/injury/placeholders/body-front.png'

const BodyFrontField = () => {

	return (
		<div className='tw-relative tw-flex-1'>
			<img src={image} alt="" className='tw-absolute tw-left-0 tw-top-0 tw-w-full tw-h-full' />
		</div>
	)
}

export default BodyFrontField