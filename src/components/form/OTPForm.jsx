import { Formik } from "formik"
import * as yup from 'yup'
import UserIdHint from "../UserIdHint"
import OTPField from "./OTPField"
import { AnimatePresence, motion } from "framer-motion"
import axios from "axios"
import { useContext } from "react"
import { UserContext } from "../../context/UserProvider"

const URL = import.meta.env.VITE_BACKEND_URL
const otpLength = 4

const OTPForm = () => {
	const { dispatch } = useContext(UserContext)
	const initialValues = { user_id: '' }

	const schema = yup.object({
		user_id: yup.string().required('User ID mismatch. Please enter the 4-digit ID specified on your wristband').length(otpLength, 'invalid length'),
	})

	const handleSubmit = (values, { setSubmitting, setFieldError }) => {
		setSubmitting(true)
		axios.post(`${URL}/api/user`, { id: values.user_id })
			.then((response) => {
				dispatch({ type: 'identify', payload: values.user_id })
			})
			.catch(error => {
				if (error.response.status !== 400) return console.error(error)
				const fieldErrors = error.response.data.errors
				fieldErrors.forEach(({ field, message }) => setFieldError(field, message))
			})
			.finally(() => setSubmitting(false))
	}

	return (
		<AnimatePresence>
			<motion.div
				className="tw-flex tw-flex-col tw-flex-1 tw-items-center tw-justify-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<Formik
					initialValues={initialValues}
					validationSchema={schema}
					onSubmit={handleSubmit}
				>
					{({ handleSubmit, isSubmitting }) => {
						return (
							<div className="tw-flex tw-flex-col tw-gap-24 tw-items-center">
								<form onSubmit={handleSubmit} className="tw-bg-gradient-to-r tw-from-[#EFF8FFB2]/70 tw-to-white/[.63] tw-py-9 tw-px-36 tw-rounded-3xl">
									<OTPField
										name="user_id"
										label="Barcode"
										description='Enter 4 digit bar code to initiate health scan'
										otpLength={otpLength}
										Hint={UserIdHint}
										readonly={isSubmitting}
									/>
								</form>
								<p className="tw-text-4xl tw-font-semibold tw-uppercase tw-text-[#6A727D] tw-max-w-[68%] tw-text-center tw-leading-snug">This Digital Tactical Combat Care solution does not capture your image</p>
							</div>
						)
					}}
				</Formik>
			</motion.div>
		</AnimatePresence>
	)
}

export default OTPForm