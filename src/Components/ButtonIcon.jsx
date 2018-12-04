import React, { Component } from 'react'
import Icon from './Icon'
import { Button } from '@material-ui/core'

class ButtonIcon extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		let { iconClass, type, color, link } = this.props.icon
		console.log(this.props.icon)
		return (
			<Button variant='text' className={this.props.mdClass} 
				href={link} 
				style={{color}}>
				<Icon iconClass={iconClass} type={type}/>
			</Button>
		)
	}
}

export default ButtonIcon