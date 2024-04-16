import { Formik } from 'formik'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserProvider'
import Button from '../Button'
import ExitDialog from '../ExitDialog'
import ProcessAborter from '../ProcessAborter'
import InjuryForm from './InjuryForm'

const InjuryCollector = () => {
	const { state: { complaintAreas }, dispatch } = useContext(UserContext)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [formType, setFormType] = useState('body')

	const handleAbort = () => {
		setIsModalOpen(true)
	}
	const confirmRestart = () => {
		dispatch({ type: 'restart' })
	}
	const cancelRestart = () => {
		setIsModalOpen(false)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (formType === 'body') setFormType('head')
		else dispatch({ type: 'submitInjuries' })
	}

	const handleCheckBoxChange = ({ target }) => {
		if (target.checked) dispatch(
			{
				type: 'complaint',
				payload: { ...complaintAreas, [formType]: ['noInjury'] }
			}
		)
	}

	return (
		<>
			<ExitDialog
				isOpen={isModalOpen}
				onConfirmNav={confirmRestart}
				onCancelNav={cancelRestart}
				question='Are you sure you want to stop the scanning process?'
				disclaimer='Any unsaved progress will be lost'
				confirmText='Stop Scanning'
				cancelText='Continue Scanning'
			/>
			<div className='tw-absolute tw-top-8 tw-left-0'>
				<ProcessAborter text='Q' onClick={handleAbort} />
			</div>
			<div className='tw-flex-1 tw-flex tw-flex-col tw-px-20 tw-pt-24 tw-pb-11'>
				<div className='tw-flex-1 tw-flex tw-flex-col tw-gap-8 tw-bg-gradient-to-r tw-from-[#EFF8FFB2]/70 tw-to-white/[.63] tw-p-9 tw-rounded-3xl'>
					<form onSubmit={handleSubmit} className='tw-flex-1 tw-flex tw-gap-11'>
						<div className='tw-basis-[65%]'>
							<InjuryForm type={formType} />
						</div>
						<div className='tw-flex-1 tw-py-8 tw-flex tw-flex-col tw-gap-16'>
							<div className='tw-flex tw-flex-col tw-gap-9'>
								<h2 className='tw-text-[#434A54] tw-text-2xl tw-font-semibold'>Mark injury by selecting on figure</h2>
								<label className='custom-radio tw-p-4 tw-justify-end tw-text-[#09101D]'>
									No injury to report
									<input type="checkbox" checked={complaintAreas[formType].includes('noInjury')} onChange={handleCheckBoxChange} />
									<span></span>
								</label>
							</div>
							<Button
								style={complaintAreas[formType].includes('noInjury') || !!complaintAreas[formType].length ? 'confirm' : 'dismiss'}
								text='Confirm'
								type='submit'
								className='tw-py-5 tw-transition-all'
								disabled={!complaintAreas[formType].includes('noInjury') && !complaintAreas[formType].length}
							/>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default InjuryCollector