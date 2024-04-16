import React from 'react'
import InjuryField from './InjuryField'

const InjuryResult = () => {
	return (
		<>
			<div className='tw-flex'>
				<div className='tw-basis-3/5'>
					<InjuryField type='body' />
				</div>
				<div className='tw-flex-1 tw-flex tw-flex-col'>
					<InjuryField type='front' />
					<InjuryField type='back' />
				</div>
			</div>
			<div className='tw-flex tw-flex-1 tw-w-[75%] tw-mx-auto'>
				<InjuryField type='left' />
				<InjuryField type='right' />
			</div>
		</>
	)
}

export default InjuryResult