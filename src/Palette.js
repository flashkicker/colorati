import React, { Component } from "react"
import { withStyles } from "@material-ui/styles"
import ColorBox from "./ColorBox"
import Navbar from "./Navbar"
import PaletteFooter from "./PaletteFooter"

import styles from "./styles/PaletteStyles"

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
		const { classes } = this.props

		const colorBoxes = colors[level].map(color => {
			return (
				<ColorBox
					background={color[format]}
					name={color.name}
					key={color.id}
					moreUrl={`/palette/${id}/${color.id}`}
					showingFullPalette
				/>
			)
		})

		return (
			<div className={classes.palette}>
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					changeFormat={this.changeFormat}
					showSlider
				/>
				<div className={classes.colors}>{colorBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		)
	}
}

export default withStyles(styles)(Palette)
