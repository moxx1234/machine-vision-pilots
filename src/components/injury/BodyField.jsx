import BodyBackField from "./BodyBackField"
import BodyFrontField from "./BodyFrontField"

const BodyField = () => {
	return (
		<div className='tw-flex-1 tw-flex tw-aspect-square tw-max-w-[90%] tw-mx-auto'>
			<BodyFrontField />
			<BodyBackField />
		</div>
	)
}

export default BodyField