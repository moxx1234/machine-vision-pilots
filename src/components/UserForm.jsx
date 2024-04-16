import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import OTPForm from './form/OTPForm'
import InjuryCollector from './injury/InjuryCollector'

const UserForm = () => {

	const { state: { user } } = useContext(UserContext)

	return (
		!user
			? <OTPForm />
			: <InjuryCollector />
	)
}

export default UserForm