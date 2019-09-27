import React, { Component } from "react"
import "./color-box.css"

class ColorBox extends Component {
	render() {
		const { name, background } = this.props

		return (
			<div className="color-box" style={{ background }}>
				<div className="copy-container">
					<div className="box-content">
						<span>{name}</span>
					</div>
					<button className="copy-button">Copy</button>
				</div>
				<span className="see-more">More</span>
			</div>
		)
	}
}

export default ColorBox
