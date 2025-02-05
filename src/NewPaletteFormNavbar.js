import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import classNames from "classnames"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import SaveIcon from "@material-ui/icons/SaveTwoTone"
import BackIcon from "@material-ui/icons/ArrowBackTwoTone"
import Button from "@material-ui/core/Button"
import PaletteMetaForm from "./PaletteMetaForm"
import styles from "./styles/NewPaletteFormNavbarStyles"

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

	renderButtons = () => {
		const { classes } = this.props

		if (window.innerWidth <= 575.98) {
			return (
				<div className={classes.navButtons}>
					<IconButton
						className={classes.fab}
						color="primary"
						onClick={this.showForm}
					>
						<SaveIcon />
					</IconButton>
					<Link to="/" className={classes.link}>
						<IconButton className={classes.button} color="secondary">
							<BackIcon />
						</IconButton>
					</Link>
				</div>
			)
		}

		return (
			<div className={classes.navButtons}>
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					onClick={this.showForm}
				>
					Save
				</Button>
				<Link to="/" className={classes.link}>
					<Button
						className={classes.button}
						variant="contained"
						color="secondary"
					>
						Back
					</Button>
				</Link>
			</div>
		)
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
							<ChevronRightIcon />
						</IconButton>
						<Typography variant="h6" color="inherit" noWrap>
							Create a Palette
						</Typography>
					</Toolbar>
					{this.renderButtons()}
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
