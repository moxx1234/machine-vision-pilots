import highCompressed from "../assets/video/high-bg.mp4"

const Background = () => {
	return (
		<div className="tw-w-full tw-h-full tw-absolute tw-object-left-top tw--z-10">
			<video
				className='tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-object-cover'
				id="local-video"
				src={highCompressed}
				loop
				muted
				autoPlay
			/>
		</div>
	)
}

export default Background