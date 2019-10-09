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
import PaletteMetaForm from "./PaletteMetaForm"

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
		alignItems: "center",
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
	navButtons: {
		marginRight: "1rem"
	},
	button: {
		margin: "0 0.5rem",
		"& a": {}
	},
	link: {
		textDecoration: "none"
	}
})

class NewPaletteFormNavbar extends Component {
	state = {
		formShowing: false
	}

	showForm = () => {
		this.setState({ formShowing: true })
	}

	hideForm = () => {
		this.setState({ formShowing: false })
	}

	render() {
		const { classes, open, palettes, handleSavePalette } = this.props

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
						<Button
							className={classes.button}
							variant="contained"
							color="primary"
							onClick={this.showForm}
						>
							Save Palette
						</Button>
						<Link to="/" className={classes.link}>
							<Button
								className={classes.button}
								variant="contained"
								color="secondary"
							>
								Go Back
							</Button>
						</Link>
					</div>
				</AppBar>
				{this.state.formShowing && (
					<PaletteMetaForm
						palettes={palettes}
						handleSavePalette={handleSavePalette}
						hideForm={this.hideForm}
					/>
				)}
			</div>
		)
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteFormNavbar)
