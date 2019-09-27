import React, { Component } from "react"
import './color-box.css'

class ColorBox extends Component {
	render() {
		return (
			<div className='color-box' style={{ background: this.props.background }} className="color-box">
				<span>{this.props.name}</span>
			</div>
		)
	}
}

export default ColorBox
