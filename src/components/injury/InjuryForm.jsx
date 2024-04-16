import React, { createContext, useContext, useEffect, useState, useRef } from 'react'
import FormNav from './FormNav'
import InjuryField from './InjuryField'
import { UserContext } from '../../context/UserProvider'
import InjuryResult from './InjuryResult'

export const InjuryContext = createContext()

// type in props = 'body' | 'head'
const InjuryForm = ({ readonly = false, type }) => {
	const { state: { complaintAreas }, dispatch } = useContext(UserContext)
	const [currentTab, setCurrentTab] = useState(0)
	const [fields, setFields] = useState([])
	const containerRef = useRef(null)

	useEffect(() => {
		if (type === 'body') setFields(['body'])
		else if (type === 'head') setFields(['front', 'back', 'left', 'right'])
	}, [type])

	useEffect(() => {
		const paths = containerRef.current.querySelectorAll('path')
		if (type !== 'full') {
			paths.forEach(path => {
				const checked = complaintAreas[type].includes(path.id)
				if (checked) path.setAttribute('fill', 'rgba(9,16,29,0.5)')
				else path.setAttribute('fill', 'rgba(9,16,29,0)')
			})
		} else {
			const injuries = Object.values(complaintAreas).reduce((res, areas) => res = [...res, ...areas], [])
			paths.forEach((path) => {
				const checked = injuries.includes(path.id)
				if (checked) path.setAttribute('fill', 'rgba(9,16,29,0.5)')
				else path.setAttribute('fill', 'rgba(9,16,29,0)')
			})
		}
	}, [complaintAreas, currentTab])

	const handleTabChoice = (index) => {
		setCurrentTab(index)
	}

	const handleAreaChioce = ({ target }) => {
		if (readonly) return
		const checked = complaintAreas[type].includes(target.id)
		if (checked) {
			const payload = complaintAreas[type].filter(area => area !== target.id)
			dispatch({ type: 'complaint', payload: { ...complaintAreas, [type]: payload } })
		} else {
			const payload = [...complaintAreas[type], target.id].filter(area => area !== 'noInjury')
			dispatch({ type: 'complaint', payload: { ...complaintAreas, [type]: payload } })
		}
	}

	return (
		<InjuryContext.Provider value={{ onChoose: handleAreaChioce }}>
			<div ref={containerRef} className='tw-bg-white tw-rounded-3xl tw-border tw-border-[#D5DDE3] tw-p-6 tw-h-full tw-flex tw-flex-col tw-gap-4'>
				{!!fields.length && <InjuryField type={fields[currentTab]} />}
				{(!readonly && type !== 'body') && <FormNav formType={type} onTabChoose={handleTabChoice} activeTab={currentTab} />}
				{readonly && <InjuryResult />}
			</div>
		</InjuryContext.Provider>
	)
}

export default InjuryForm