import React from 'react'
import BodyField from './BodyField'
import FieldFront from './FieldFront'
import FieldBack from './FieldBack'
import FieldLeft from './FieldLeft'
import FieldRight from './FieldRight'

const InjuryField = ({ type }) => {
	switch (type) {
		case 'body': return <BodyField />
		case 'front': return <FieldFront />
		case 'back': return <FieldBack />
		case 'left': return <FieldLeft />
		case 'right': return <FieldRight />
		default: throw new Error('unknown injury field type')
	}
}

export default InjuryField