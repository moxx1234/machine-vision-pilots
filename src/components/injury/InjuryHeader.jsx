import React from 'react'

const InjuryHeader = ({ title, anchor = null, timeStamp }) => {

	const className = `tw-flex ${anchor ? 'tw-justify-between' : 'tw-justify-center'} tw-items-center`

	return (
		<header className={className}>
			<div className='tw-text-[#09101D]'>
				<h1 className='tw-text-3xl tw-font-bold tw-mb-2'>{title}</h1>
				<p className='tw-font-medium'>{timeStamp}</p>
			</div>
			{anchor && anchor}
		</header>
	)
}

export default InjuryHeader