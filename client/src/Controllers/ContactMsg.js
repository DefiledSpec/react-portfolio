import axios from 'axios'

class ContactMsg {
	validate(data) {
		// todo: add some validation here
		// console.log(data)
		return true
	}
	async add(data) {
		if (this.validate(data)) {
			try {
				const res = await axios.post('api/contact', data)
				if (res.ok) return true
			} catch (err) {
				return false
			}
		} else {
			alert('Sorry this doesn\'t work yet..')
			return false
		}
	}
}

export default new ContactMsg()
