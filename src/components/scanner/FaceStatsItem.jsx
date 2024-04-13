import Indicator from "./Indicator"

const AnimatedLine = ({ img, animated }) => {
	return (
		<div className=" tw-w-full tw-h-full tw-overflow-hidden">
			<div className={`tw-bg-no-repeat-y tw-bg-repeat-x tw-bg-[0%_center] tw-h-full ${animated && 'animation-line'}`} style={{ backgroundImage: `url(.${img})` }}></div>
		</div>
	)
}

const FaceStatsItem = ({ value, unit, name, lineImg = null, animComponent = null, animated }) => {

	return (
		<div className="tw-flex tw-gap-3">
			<div className="tw-flex-1">
				{lineImg && <AnimatedLine animated={animated} img={lineImg} />}
				{!!animComponent && animComponent}
			</div>
			<div>
				<Indicator value={value || '-/-'} unit={unit} name={name} />
			</div>
		</div>
	)
}

export default FaceStatsItem