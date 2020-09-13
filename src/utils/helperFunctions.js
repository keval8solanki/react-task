import axios from 'axios'

export const fetchData = async (uri, setData) => {
	const { data } = await axios.get(uri)
	if (data) setData(data)
}

