import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Navbar from "./Navbar"
import ColorBox from "./ColorBox"
import PaletteFooter from "./PaletteFooter"

import "./palette.css"

class SingleColorPalette extends Component {
	state = {
		format: "hex"
	}

	changeFormat = value => {
		this.setState({ format: value })
	}

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
		const { format } = this.state
		const { paletteName, emoji, id } = this.props.palette

		const colorBoxes = this._shades.map(color => {
			return (
				<ColorBox
					key={color.name}
					name={color.name}
					background={color[format]}
					showMore={false}
				/>
			)
		})

		return (
			<div className="single-color-palette palette">
				<Navbar showSlider={false} changeFormat={this.changeFormat} />
				<div className="palette-colors">
					{colorBoxes}
					<div className="go-back color-box">
						<Link to={`/palette/${id}`} className="back-button">GO BACK</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		)
	}
}

export default SingleColorPalette
