import React, { useContext } from 'react'
import { InjuryContext } from '../InjuryForm'

const HeadRightAreas = () => {

	const { onChoose } = useContext(InjuryContext)

	return (
		<svg className='tw-w-full tw-h-full area' viewBox="0 0 540 420" fill="none" xmlns="http://www.w3.org/2000/svg" >
			<path fill='rgba(0,0,0,0)' onClick={onChoose} id='head-right-neck-front' d="M336.681 361.004C333.667 348.81 342.858 343.111 347.164 342.06C281.502 326.291 306.835 325.842 271.314 275.447C266.005 276.845 258.546 276.499 248.171 273.806C252.046 289.364 242.969 365.997 237.945 402.369C274.688 408.25 307.797 406.046 325.2 402.369L335.605 366.26L336.681 361.004Z" stroke="#6A727D" />
			<path fill='rgba(0,0,0,0)' onClick={onChoose} id='head-right-neck-back' d="M135.703 222.82C143.963 236.867 151.491 249.203 155.934 262.242M155.934 262.242C171.757 308.686 160.976 351.893 151.311 371.045C179.443 388.512 209.933 397.883 237.958 402.369C242.981 365.997 252.058 289.364 248.183 273.806C240.901 270.842 231.822 261.613 224.045 249.627C214.903 255.059 188.483 265.186 155.934 262.242Z" stroke="#6A727D" />
			<path fill='rgba(0,0,0,0)' onClick={onChoose} id='head-right-top' d="M135.696 222.82C143.959 236.866 151.484 249.203 155.926 262.242C188.475 265.185 214.896 255.058 224.038 249.627C209.016 226.475 198.854 193.038 215.884 174.606C208.528 155.987 199.706 104.859 220.373 54.3993C212.195 52.5933 192.852 47.3795 180.901 40.9717C100.071 95.2799 114.203 192.406 135.696 222.82Z" stroke="#6A727D" />
			<path fill='rgba(0,0,0,0)' onClick={onChoose} id='head-right-ear' d="M271.863 182.874C271.433 164.792 251.232 161.674 241.186 162.374C229.509 164.381 221.318 168.732 215.89 174.607C198.86 193.039 209.022 226.475 224.044 249.627C231.821 261.613 240.9 270.842 248.182 273.806C258.557 276.499 266.016 276.845 271.325 275.448C287.773 271.117 283.585 250.047 281.551 230.179C280.348 227.495 278.877 221.487 277.418 214.411C275.22 203.75 273.049 190.666 271.863 182.874Z" stroke="#6A727D" />
			<path fill='rgba(0,0,0,0)' onClick={onChoose} id='head-right-crown' d="M206.198 27.8153C196.896 31.8006 188.486 36.2122 180.898 40.9719C204.114 52.8713 255.965 67.9307 306.838 52.3396C318.863 48.6544 330.833 43.2566 342.357 35.6998C297.844 13.3547 239.329 18.8529 206.198 27.8153Z" stroke="#6A727D" />
			<path fill='rgba(0,0,0,0)' onClick={onChoose} id='head-right-temple' d="M281.547 230.178C280.344 227.494 278.873 221.486 277.414 214.41M277.414 214.41C275.216 203.749 273.045 190.665 271.859 182.873C271.428 164.791 251.228 161.673 241.182 162.373C229.505 164.38 221.314 168.731 215.886 174.606C208.531 155.986 199.711 104.859 220.377 54.3993C236.921 58.3435 277.375 63.4533 306.842 52.3389C318.682 72.3724 342.362 118.957 342.362 145.028C333.893 154.297 323.309 175.777 335.219 198.641C323.543 204.773 295.637 216.512 277.414 214.41Z" stroke="#6A727D" />
			<path fill='rgba(0,0,0,0)' onClick={onChoose} id='head-right-jaw' d="M417.555 243.847C442.514 238.861 441.017 228.392 436.012 218.091L423.592 198.643C376.63 227.657 353.101 221.244 347.207 214.411C341.839 209.169 337.941 203.87 335.218 198.643C323.543 204.775 295.636 216.514 277.414 214.411C278.873 221.487 280.344 227.496 281.546 230.18C283.581 250.048 287.768 271.117 271.32 275.448C306.842 325.843 281.508 326.292 347.17 342.06C403.578 338.57 414.061 330.594 406.074 295.696C343.101 308.836 345.054 245.423 415.022 249.628L417.555 243.847Z" stroke="#6A727D" />
			<path fill='rgba(0,0,0,0)' onClick={onChoose} id='head-right-lips' d="M409.638 271.178C423.543 265.284 418.069 254.708 415.02 249.627C345.052 245.422 343.099 308.836 406.072 295.695C405.573 285.226 420.402 282.741 409.638 271.178Z" stroke="#6A727D" />
			<path fill='rgba(0,0,0,0)' onClick={onChoose} id='head-right-eyes' d="M406.076 171.059C404.578 162.584 412.565 159.593 407.574 136.161C404.079 129.68 404.213 130.448 401.92 123.479C389.064 126.107 359.154 134.096 342.363 145.029C333.895 154.298 323.311 175.778 335.22 198.642C337.943 203.869 341.841 209.168 347.209 214.411C353.103 221.244 376.632 227.656 423.594 198.642C423.594 198.642 407.574 179.534 406.076 171.059Z" stroke="#6A727D" />
			<path fill='rgba(0,0,0,0)' onClick={onChoose} id='head-right-forehead' d="M394.034 94.0437C383.772 65.3904 364.855 46.9909 342.363 35.7002C330.839 43.257 318.869 48.6547 306.844 52.34C318.684 72.3736 342.363 118.958 342.363 145.029C359.154 134.096 389.064 126.107 401.92 123.479C398.739 113.81 395.702 101.578 394.034 94.0437Z" stroke="#6A727D" />
		</svg>
	)
}

export default HeadRightAreas