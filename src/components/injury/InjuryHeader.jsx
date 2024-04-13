import React from 'react'

const InjuryHeader = ({ title, anchor = null }) => {

	const className = `tw-flex ${anchor ? 'tw-justify-between' : 'tw-justify-center'} tw-items-center`

	return (
		<header className={className}>
			<h1 className='tw-text-[#09101D] tw-text-3xl tw-font-bold'>{title}</h1>
			{anchor && anchor}
		</header>
	)
}

export default InjuryHeader