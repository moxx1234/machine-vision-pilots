import React, { useState } from 'react'
import FormNav from './FormNav'
import InjuryField from './InjuryField'

const fieldTypes = ['body', 'front', 'back', 'left', 'right']

// type in props = 'body' | 'head' | 'full'
const InjuryForm = ({ readonly = false, type }) => {
	const [currentTab, setCurrentTab] = useState(0)

	const handleTabChoice = (index) => {
		setCurrentTab(index)
	}

	return (
		<div className='tw-bg-white tw-rounded-3xl tw-border tw-border-[#D5DDE3] tw-p-6 tw-h-full tw-flex tw-flex-col tw-gap-4'>
			<InjuryField type={fieldTypes[currentTab]} />
			{type !== 'body' && <FormNav formType={type} onTabChoose={handleTabChoice} activeTab={currentTab} />}
		</div>
	)
}

export default InjuryForm