import axios from 'axios'

export const fetchData = async (uri, setData) => {
	const { data } = await axios.get(uri)
	if (data) setData(data)
}

export const convertFieldToOriginal = (str) => {
	const lowerChar = str.toLowerCase()
	if (lowerChar === 'userid') {
		return 'userId'
	} 

	return lowerChar
}