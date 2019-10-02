import React, { Component } from "react"
import ColorBox from "./ColorBox"
import Navbar from "./Navbar"

import "./palette.css"

class Palette extends Component {
	state = { level: 500, format: "hex" }

	changeLevel = level => {
		this.setState({ level })
	}

	changeFormat = value => {
		this.setState({ format: value })
	}

	render() {
		const { colors } = this.props.palette
		const { level, format } = this.state

		const colorBoxes = colors[level].map(color => {
			return <ColorBox background={color[format]} name={color.name} />
		})

		return (
			<div className="palette">
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					changeFormat={this.changeFormat}
				/>
				<div className="palette-colors">{colorBoxes}</div>
				{/* footer goes here */}
			</div>
		)
	}
}

export default Palette
