import { useContext, useEffect, useRef } from 'react'
import { socket } from '../../api/socket'
import { ScanContext } from '../../context/ScanProvider'

const VideoRenderer = () => {
	const canvasRef = useRef(null)
	const { scanState } = useContext(ScanContext)
	const { finished } = scanState

	useEffect(() => {
		const canvas = canvasRef.current
		canvas.width = canvas.closest('div').clientWidth
		canvas.height = canvas.closest('div').clientHeight
		canvas.style.opacity = 1

		const context = canvas.getContext('2d')

		if (!finished) {
			// stream video from backend
			socket.on('video_frame', (data) => {
				const uint8Array = new Uint8Array(data)
				const img = new Image()
				const blob = new Blob([uint8Array], { type: 'image/jpeg' })

				img.src = URL.createObjectURL(blob)
				img.onload = () => {
					context.drawImage(img, 0, 0, canvas.width, canvas.height)
				}
			})
		}

		return () => {
			socket.off('video_frame')
		}
	}, [finished])

	return (
		<div className="tw-w-full tw-h-full tw-absolute tw-object-left-top tw--z-10">
			<canvas ref={canvasRef} id='full-canvas' />
		</div>
	)
}

export default VideoRenderer
