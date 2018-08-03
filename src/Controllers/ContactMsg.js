


class ContactMsg {
	constructor() {

	}
	validate() {

	}
	async add(data) {
		const headers = new Headers()
		headers.append('Content-Type', 'application/json')

		const options = {
			method: 'POST',
			headers,
			body: JSON.stringify(data)
		}
		const request = new Request('http://localhost:3001/v1/contact/add', options)
		const res = await fetch(request)
	}



}

export default Contact