import React from 'react'

const IconButton = ({ icon, text, onClick }) => {
	return (
		<button onClick={onClick} className='tw-py-4 tw-px-6 tw-flex tw-gap-4 tw-rounded-3xl tw-border-2 tw-border-[#09101D]'>
			<img src={icon} alt={text} />
			<p className='tw-text-[#09101D] tw-uppercase tw-font-semibold'>{text}</p>
		</button>
	)
}

export default IconButton