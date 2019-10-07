import React, { Component } from "react"
import ColorBox from "./ColorBox"

import "./palette.css"

class SingleColorPalette extends Component {
	state = {}

	gatherShades = (palette, colorToFilterBy) => {
		let shades = []
		let allColors = palette.colors

		for (let key in allColors) {
			shades = shades.concat(
				allColors[key].filter(color => color.id === colorToFilterBy)
			)
		}
		return shades.slice(1)
	}

	_shades = this.gatherShades(this.props.palette, this.props.colorId)

	render() {
		const colorBoxes = this._shades.map(color => {
			return (
				<ColorBox
					key={color.id}
					name={color.name}
					background={color.hex}
					showMore={false}
				/>
			)
		})

		return (
			<div className="palette">
				<h1>SINGLE COLOR PALETTE</h1>
				<div className="palette-colors">{colorBoxes}</div>
			</div>
		)
	}
}

export default SingleColorPalette
