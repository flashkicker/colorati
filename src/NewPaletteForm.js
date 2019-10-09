import React, { Component } from "react"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import Button from "@material-ui/core/Button"
import DraggableColorList from "./DraggableColorList"
import { arrayMove } from "react-sortable-hoc"
import NewPaletteFormNavbar from "./NewPaletteFormNavbar"
import ColorPickerForm from "./ColorPickerForm"

const drawerWidth = 400

const styles = theme => ({
	root: {
		display: "flex"
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		display: "flex",
		alignItems: "center"
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: "0 8px",
		...theme.mixins.toolbar,
		justifyContent: "flex-end"
	},
	content: {
		flexGrow: 1,
		height: "calc(100vh - 64px)",
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},
	container: {
		width: "90%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	buttons: {
		margin: "0 3px"
	},
	button: {
		margin: "0 0.5rem"
	}
})

class NewPaletteForm extends Component {
	static defaultProps = {
		maxColors: 20
	}

	state = {
		open: true,
		currentColor: "teal",
		colors: this.props.palettes[0].colors,
		newColorName: ""
	}

	handleDrawerOpen = () => {
		this.setState({ open: true })
	}

	handleDrawerClose = () => {
		this.setState({ open: false })
	}

	addNewColor = newColor => {
		this.setState({
			colors: [...this.state.colors, newColor],
			newColorName: ""
		})
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSavePalette = palette => {
		const { paletteName, emoji } = palette
		const newPalette = {
			paletteName,
			id: paletteName.toLowerCase().replace(/ /g, "-"),
			colors: this.state.colors,
			emoji
		}

		this.props.savePalette(newPalette)
		this.props.history.push("/")
	}

	removeColor = colorName => {
		this.setState({
			colors: this.state.colors.filter(color => color.name !== colorName)
		})
	}

	clearPalette = () => {
		this.setState({ colors: [] })
	}

	addRandomColor = () => {
		//pick random color from existing palettes
		const allColors = this.props.palettes.map(palette => palette.colors).flat()
		let rand = Math.floor(Math.random() * allColors.length)
		let randomColor = allColors[rand]
		this.setState({ colors: [...this.state.colors, randomColor] })
	}

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex)
		}))
	}

	render() {
		const { classes, maxColors, palettes } = this.props
		const { open, colors } = this.state
		const paletteIsFull = colors.length >= maxColors

		return (
			<div className={classes.root}>
				<NewPaletteFormNavbar
					open={open}
					palettes={palettes}
					handleDrawerOpen={this.handleDrawerOpen}
					handleSavePalette={this.handleSavePalette}
				/>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<div className={classes.container}>
						<Typography gutterBottom variant="h6">
							Design Your Palette
						</Typography>
						<div className={classes.buttons}>
							<Button
								variant="contained"
								color="secondary"
								margin="dense"
								onClick={this.clearPalette}
								className={classes.button}
							>
								Clear Palette
							</Button>
							<Button
								variant="contained"
								color="primary"
								margin="dense"
								disabled={paletteIsFull}
								onClick={this.addRandomColor}
								className={classes.button}
							>
								Random Color
							</Button>
						</div>
						<ColorPickerForm
							paletteIsFull={paletteIsFull}
							addNewColor={this.addNewColor}
							colors={colors}
						/>
					</div>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
					<DraggableColorList
						colors={colors}
						axis="xy"
						removeColor={this.removeColor}
						onSortEnd={this.onSortEnd}
					/>
				</main>
			</div>
		)
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm)
