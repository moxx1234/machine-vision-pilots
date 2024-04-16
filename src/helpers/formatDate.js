export const formatDate = (date) => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const isNoon = hours < 12

	let convertedHours = hours
	if (hours === 0) {
		convertedHours = 12
	} else if (hours > 13 && hours <= 23) {
		convertedHours -= 12
	}
	convertedHours = convertedHours > 10 ? convertedHours : '0' + convertedHours
	const convertedMinutes = minutes > 10 ? minutes : '0' + minutes

	return `${day}/${month}/${year}, ${convertedHours}:${convertedMinutes} ${isNoon ? 'AM' : 'PM'}`
}