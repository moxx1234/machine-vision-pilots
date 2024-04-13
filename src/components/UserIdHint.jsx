import Button from "./Button"
import image from '../assets/img/barcode.jpg'

const UserIdHint = ({ onClose }) => {
	return (
		<div className='tw-flex tw-flex-col tw-gap-9 tw-rounded-3xl tw-p-9 tw-bg-gradient-to-r tw-from-[rgba(255,255,255,0.9)] tw-to-[#EFF8FF] tw-items-center'>
			<h2 className='tw-font-bold tw-text-[32px]'>Bar code</h2>
			<div className='tw-flex tw-flex-col tw-gap-6'>
				<img src={image} alt="wristband image" className='tw-object-contain' />
				<div className='tw-text-[26px]'>
					<p>The 4-digit bar code device number is commonly printed on this label, which is usually located on the back, bottom, or sides of the device</p>
				</div>
			</div>
			<Button onClick={onClose} style='dismiss' text='close' className='tw-font-semibold tw-uppercase tw-text-xl tw-self-stretch tw-py-6' />
		</div>
	)
}

export default UserIdHint