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
		const { colors, paletteName, emoji } = this.props.palette
		const { level, format } = this.state

		const colorBoxes = colors[level].map(color => {
			return (
				<ColorBox background={color[format]} name={color.name} key={color.id} />
			)
		})

		return (
			<div className="palette">
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					changeFormat={this.changeFormat}
				/>
				<div className="palette-colors">{colorBoxes}</div>
				<footer className="footer">
					{paletteName}
					<span className="emoji">{emoji}</span>
				</footer>
			</div>
		)
	}
}

export default Palette
