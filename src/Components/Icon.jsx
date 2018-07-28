import React, { Component } from 'react'

class Icon extends Component {
	render() {
		return (
			<i className={`material-icons ${this.props._class}`}>{this.props.icon}</i>
		)
	}
}

export default Icon