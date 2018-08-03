


class ContactMsg {
	constructor(name, email, msg) {
		this.data = {
			name,
			email,
			msg,
		}
	}
	validate() {
		return true
	}
	async add() {
		if (this.validate()) {
			const headers = new Headers()
			headers.append('Content-Type', 'application/json')
			const options = {
				method: 'POST',
				headers,
				body: JSON.stringify(this.data)
			}
			const request = new Request('http://localhost:3005/api/messages/add', options)
			try {
				const res = await fetch(request)
				if (res.ok) {
					// let log = await res.json()
					console.log('Message Sent successfully', await res.json())
					return true				
				} else {
					return true
				}	
			}catch(err) {
				return false
			}
		} else {
			return false
		}	
	}

}

export default ContactMsg
