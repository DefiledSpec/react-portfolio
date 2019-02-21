require('dotenv').config()
const router = require("express").Router();
const projectsRoutes = require("./projects");
const imgRoutes = require("./imgs");
const bioRoutes = require("./bio");
const emailer = require('../../email')

router.use("/projects", projectsRoutes);
router.use('/img', imgRoutes)
router.use('/bio', bioRoutes)

// todo: move this into its own routes file, possibly a controller as well?
router.post('/contact', (req, res) => {
	let { name, email, msg: comment } = req.body
	console.log(req.body)
	if(name.trim() !== '' && email.trim() !== '' && comment.trim() !== '') {
		let emailOpts = {
			from: `"${name.trim()}" <${email.trim()}`,
			to: 'harrahjz@gmail.com',
			subject: 'Portfolio Contact',
			text: comment.trim()
		}
		emailer.sendMail(emailOpts, (err, info) => {
			if(err) {
				console.log(err)
				res.send({ msg: 'There was a problem sending the email. Please try again!', ok: false })
			} else {
				res.send({ msg: 'Email Sent Successfully!', ok: true })
			}
			console.log(info)
		})
	} else {
		res.send({ msg: 'Name, Email and Message fields are required!', ok: false })
	}
})

// todo: move login, register and admin to its own file
router.post('/login', (req, res) => {
	console.log(req.body)
})
router.post('/register', (req, res) => {
	console.log(req.body)
})
router.use('/admin/:secret', (req, res) => res.send(req.params.secret === process.env.AUTHSECRET))

module.exports = router;
