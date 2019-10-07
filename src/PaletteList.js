import React, { Component } from "react"
import { withStyles } from "@material-ui/styles"
import { Link } from "react-router-dom"
import MiniPalette from "./MiniPalette"

import styles from "./styles/PaletteListStyles"

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
						<Link to="/palette/new">
							<h4>Create Palette</h4>
						</Link>
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
