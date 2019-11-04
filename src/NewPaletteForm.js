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
import styles from "./styles/NewPaletteFormStyles"
import seedColors from "./seedColors"

class NewPaletteForm extends Component {
	static defaultProps = {
		maxColors: 20
	}

	state = {
		open: true,
		currentColor: "teal",
		colors: seedColors[0].colors,
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
		let rand,
			randomColor,
			isDuplicateColor = true

		while (isDuplicateColor) {
			rand = Math.floor(Math.random() * allColors.length)
			randomColor = allColors[rand]
			isDuplicateColor = this.state.colors.some(
				color => color.name === randomColor.name
			)
		}

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
								size="small"
								onClick={this.clearPalette}
								className={classes.button}
							>
								Clear
							</Button>
							<Button
								variant="contained"
								color="primary"
								margin="dense"
								size="small"
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
					<span style={{ padding: "30px 30px 0px 30px", textAlign: "center" }}>
						<strong>
							Hint: You can re-arrange the color boxes by dragging them around
						</strong>
					</span>
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
						distance={20}
					/>
				</main>
			</div>
		)
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm)
