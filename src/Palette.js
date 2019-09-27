import React, { Component } from "react"
import ColorBox from "./ColorBox"
import './palette.css'

class Palette extends Component {
	render() {
		const colorBoxes = this.props.colors.map(color => {
			return <ColorBox background={color.color} name={color.name} />
		})

		return (
			<div className="palette">
				{/* navbar goes here */}
				<div className="palette-colors">{colorBoxes}</div>
				{/* footer goes here */}
			</div>
		)
	}
}

export default Palette
