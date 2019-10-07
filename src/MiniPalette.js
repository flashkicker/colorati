import React from "react"
import { withStyles } from "@material-ui/styles"

const styles = {
	root: {
		backgroundColor: "white",
		borderRadius: "5px",
		padding: "0.5rem",
		position: "relative",
		overflow: "hidden",
		border: "1px solid black",
		"&:hover": {
			cursor: "pointer"
		}
	},
	colorsStyle: {
		backgroundColor: "#dae1e4",
		height: "100px",
		width: "100%",
		borderRadius: "5px",
		overflow: "hidden"
	},
	emojiStyle: {
		marginLeft: "0.5rem",
		fontSize: "1.5rem"
	},
	title: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0",
		color: "black",
		paddingTop: "0.5rem",
		fontSize: "1rem",
		position: "relative"
	},
	miniColor: {
		height: "25%",
		width: "20%",
		float: "left",
		margin: "0",
		position: "relative"
	}
}

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
