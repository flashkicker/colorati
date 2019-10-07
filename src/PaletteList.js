import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/styles"
import MiniPalette from "./MiniPalette"

const styles = {
	root: {
		backgroundColor: "blue",
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center"
	},
	container: {
		width: "70%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap"
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white"
	},
	miniPalettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gridGap: "5%"
	}
}

class PaletteList extends Component {
	goToPalette = id => {
		this.props.history.push(`/palette/${id}`)
	}

	render() {
		const { palettes, classes } = this.props
		const { root, container, nav, miniPalettes } = classes
		return (
			<div className={root}>
				<div className={container}>
					<nav className={nav}>
						<h1>colorati</h1>
					</nav>
					<div className={miniPalettes}>
						{palettes.map(palette => {
							return (
								<MiniPalette
									handleClick={() => this.goToPalette(palette.id)}
									{...palette}
								/>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(PaletteList)
