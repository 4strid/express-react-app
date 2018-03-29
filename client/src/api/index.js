import axios from 'axios'

export const getTest = () => {
	return axios.get('/api/test')
}
