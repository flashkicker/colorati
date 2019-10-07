import React, { Component } from "react"
import ColorBox from "./ColorBox"
import Navbar from "./Navbar"
import PaletteFooter from "./PaletteFooter"

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
		const { colors, paletteName, emoji, id } = this.props.palette
		const { level, format } = this.state

		const colorBoxes = colors[level].map(color => {
			return (
				<ColorBox
					background={color[format]}
					name={color.name}
					key={color.id}
					moreUrl={`/palette/${id}/${color.id}`}
					showMore
				/>
			)
		})

		return (
			<div className="palette">
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					changeFormat={this.changeFormat}
					showSlider
				/>
				<div className="palette-colors">{colorBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		)
	}
}

export default Palette
