import React, { Component } from "react"
import Slider from "rc-slider"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/styles"
import { Select, MenuItem, Snackbar, IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

import "rc-slider/assets/index.css"
import styles from "./styles/NavbarStyles"

class Navbar extends Component {
	state = {
		format: "hex",
		open: false
	}

	handleFormatChange = event => {
		this.setState({ format: event.target.value, open: true })
		this.props.changeFormat(event.target.value)
	}

	closeSnackbar = () => {
		this.setState({ open: false })
	}

	render() {
		const { level, changeLevel, showSlider, classes } = this.props
		const { format } = this.state

		return (
			<header className={classes.navbar}>
				<div className={classes.logo}>
					<Link to="/">colorati</Link>
				</div>
				{showSlider && (
					<div>
						<span>Level: {level} </span>
						<div className={classes.slider}>
							<Slider
								defaultValue={level}
								min={100}
								max={900}
								step={100}
								onAfterChange={changeLevel}
							/>
						</div>
					</div>
				)}
				<div className={classes.selectContainer}>
					<Select
						value={format}
						onChange={this.handleFormatChange}
						className={classes.selectFormat}
					>
						<MenuItem value="hex">HEX - ex. #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - ex. rgb(255, 255, 255)</MenuItem>
						<MenuItem value="rgba">
							RGBA - ex. rgba(255, 255, 255, 1.0)
						</MenuItem>
					</Select>
				</div>
				<Snackbar
					open={this.state.open}
					autoHideDuration={3000}
					message={<span id="message-id">Format changed to {format}!</span>}
					ContentProps={{ "aria-describedby": "message-id" }}
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
					onClose={this.closeSnackbar}
					action={[
						<IconButton
							color="inherit"
							key="close"
							aria-label="close"
							onClick={this.closeSnackbar}
						>
							<CloseIcon />
						</IconButton>
					]}
				/>
			</header>
		)
	}
}

export default withStyles(styles)(Navbar)
