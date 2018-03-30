import axios from 'axios'

export const getMessages = () => {
	return axios.get('/api/messages/').then(getData)
}

export const sendMessage = message => {
	return axios.post('/api/messages/', message).then(getData)
}

function getData (response) {
	return response.data
}
