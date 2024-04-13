import image from '../../assets/img/injury/placeholders/head-front.png'

const FieldFront = () => {
	return (
		<div className='tw-flex-1 tw-flex tw-relative'>
			<img src={image} alt="" className='tw-absolute tw-w-full tw-h-full tw-top-0 tw-left-0 tw-object-contain' />
		</div>
	)
}

export default FieldFront