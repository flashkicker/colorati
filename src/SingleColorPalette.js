import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/styles"
import Navbar from "./Navbar"
import ColorBox from "./ColorBox"
import PaletteFooter from "./PaletteFooter"

import styles from "./styles/PaletteStyles"

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
		const { classes } = this.props

		const colorBoxes = this._shades.map(color => {
			return (
				<ColorBox
					key={color.name}
					name={color.name}
					background={color[format]}
					showingFullPalette={false}
				/>
			)
		})

		return (
			<div className={classes.palette}>
				<Navbar showSlider={false} changeFormat={this.changeFormat} />
				<div className={classes.colors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link to={`/palette/${id}`}>GO BACK</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		)
	}
}

export default withStyles(styles)(SingleColorPalette)
