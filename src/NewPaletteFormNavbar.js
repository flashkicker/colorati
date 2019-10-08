import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import classNames from "classnames"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Button from "@material-ui/core/Button"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"

const drawerWidth = 400

const styles = theme => ({
	root: {
		display: "flex"
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		flexDirection: "row",
		justifyContent: "space-between",
		height: "64px"
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20
	},
	hide: {
		display: "none"
	},
	navButtons: {}
})

class NewPaletteFormNavbar extends Component {
	state = {
		newPaletteName: ""
	}

	componentDidMount() {
		ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
			this.props.palettes.every(palette => {
				return palette.paletteName.toLowerCase() !== value.toLowerCase()
			})
		)
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		const { classes, open } = this.props
		const { newPaletteName } = this.state

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					color="default"
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.props.handleDrawerOpen}
							className={classNames(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" color="inherit" noWrap>
							Create a Palette
						</Typography>
					</Toolbar>
					<div className={classes.navButtons}>
						<ValidatorForm
							onSubmit={() => this.props.handleSavePalette(newPaletteName)}
						>
							<TextValidator
								label="Palette Name"
								name="newPaletteName"
								autoComplete="off"
								placeholder="Palette Name"
								validators={["required", "isPaletteNameUnique"]}
								errorMessages={[
									"Enter Palette Name",
									"Palette name already used"
								]}
								onChange={this.handleChange}
								value={newPaletteName}
							/>
							<Link to="/">
								<Button variant="contained" color="secondary">
									Go Back
								</Button>
							</Link>
							<Button variant="contained" color="primary" type="submit">
								Save Palette
							</Button>
						</ValidatorForm>
					</div>
				</AppBar>
			</div>
		)
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteFormNavbar)
