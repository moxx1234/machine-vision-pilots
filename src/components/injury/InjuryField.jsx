import React from 'react'
import BodyField from './BodyField'

const InjuryField = ({ type }) => {
	switch (type) {
		case 'body': return <BodyField />
		default: throw new Error('unknown injury field type')
	}
}

export default InjuryField