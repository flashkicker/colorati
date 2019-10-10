import React, { Component } from "react"
import { withStyles } from "@material-ui/styles"
import DeleteIcon from "@material-ui/icons/Delete"

import styles from "./styles/MiniPaletteStyles"

class MiniPalette extends Component {
	deletePalette = event => {
		event.stopPropagation()
		this.props.handleDeletePalette(this.props.id)
	}

	render() {
		const { classes, paletteName, emoji, colors, handleClick, id } = this.props
		const { root, colorsStyle, title, emojiStyle, miniColor } = classes

		const miniColorBoxes = colors.map(color => {
			return (
				<div
					className={miniColor}
					style={{ backgroundColor: color.color }}
					key={color.name}
				/>
			)
		})

		return (
			<div className={root} onClick={handleClick}>
				<DeleteIcon
					className={classes.deleteIcon}
					onClick={this.deletePalette}
				/>
				<div className={colorsStyle}>{miniColorBoxes}</div>
				<h5 className={title}>
					{paletteName}
					<span className={emojiStyle}>{emoji}</span>
				</h5>
			</div>
		)
	}
}

export default withStyles(styles)(MiniPalette)
