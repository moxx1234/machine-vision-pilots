import React, { useState } from 'react'
import bodyImg from '../../assets/img/form-navigation/body.png'
import headFrontImg from '../../assets/img/form-navigation/head-front.png'
import headBackImg from '../../assets/img/form-navigation/head-back.png'
import headLeftImg from '../../assets/img/form-navigation/head-left.png'
import headRightImg from '../../assets/img/form-navigation/head-right.png'

const buttonStyles = {
	active: 'tw-bg-transparent tw-shadow-[0_0_0_2px_#6A727D_inset] tw-text-[#09101D] tw-font-medium',
	inactive: 'tw-bg-[#EFF4F9] tw-text-[#6A727D] tw-font-light'
}

const FormNav = ({ formType, onTabChoose, activeTab }) => {

	const navigation = formType === 'full' ? [{ text: 'body', image: bodyImg }] : []
	navigation.push(...[
		{ text: 'front', image: headFrontImg },
		{ text: 'back', image: headBackImg },
		{ text: 'left', image: headLeftImg },
		{ text: 'right', image: headRightImg }
	])

	return (
		<nav className='tw-flex tw-gap-4'>
			{navigation.map((button, index) => (
				<button
					key={index}
					className={`${activeTab === index ? buttonStyles.active : buttonStyles.inactive} tw-uppercase tw-transition-all tw-flex tw-flex-col tw-justify-between tw-flex-1 tw-p-4 tw-items-center tw-gap-3 tw-rounded-2xl`}
					onClick={() => onTabChoose(index)}
				>
					<img src={button.image} alt={`${button.text} image`} className='tw-flex-1 tw-object-contain tw-aspect-[110/85]' />
					<p>{button.text}</p>
				</button>
			))}
		</nav>
	)
}

export default FormNav
