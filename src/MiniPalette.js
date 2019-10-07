import React from "react"
import { withStyles } from "@material-ui/styles"

import styles from "./styles/MiniPaletteStyles"

const MiniPalette = props => {
	const { classes, paletteName, emoji, id, colors, handleClick } = props
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
			<div className={colorsStyle}>{miniColorBoxes}</div>
			<h5 className={title}>
				{paletteName}
				<span className={emojiStyle}>{emoji}</span>
			</h5>
		</div>
	)
}

export default withStyles(styles)(MiniPalette)
