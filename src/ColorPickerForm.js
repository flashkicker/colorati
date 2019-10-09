import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { ChromePicker } from "react-color"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import styles from "./styles/ColorPickerFormStyles"

class ColorPickerForm extends Component {
	state = {
		currentColor: "teal",
		newColorName: ""
	}

	componentDidMount() {
		ValidatorForm.addValidationRule("isColorNameUnique", value =>
			this.props.colors.every(color => {
				return color.name.toLowerCase() !== value.toLowerCase()
			})
		)
		ValidatorForm.addValidationRule("isColorUnique", () =>
			this.props.colors.every(color => {
				return color.color !== this.state.currentColor
			})
		)
	}

	updateCurrentColor = newColor => {
		this.setState({ currentColor: newColor })
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleAddNewColor = () => {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newColorName
		}

		this.props.addNewColor(newColor)
		this.setState({ newColorName: "" })
	}

	render() {
		const { paletteIsFull, classes } = this.props
		const { currentColor, newColorName } = this.state

		return (
			<div>
				<ChromePicker
					className={classes.picker}
					width="100%"
					color={currentColor}
					onChangeComplete={newColor => this.updateCurrentColor(newColor.hex)}
				/>
				<ValidatorForm onSubmit={this.handleAddNewColor}>
					<TextValidator
						value={newColorName}
						className={classes.newColorName}
						variant="outlined"
						margin="dense"
						autoComplete="off"
						placeholder="Color Name"
						name="newColorName"
						validators={["required", "isColorNameUnique", "isColorUnique"]}
						errorMessages={[
							"Enter a color name",
							"Color name must be unique",
							"Color already used"
						]}
						onChange={this.handleChange}
					/>
					<Button
						variant="contained"
						type="submit"
						color="primary"
						disabled={paletteIsFull}
						className={classes.addNewColor}
						style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
					>
						{paletteIsFull ? "Palette Full" : "Add Color"}
					</Button>
				</ValidatorForm>
			</div>
		)
	}
}

export default withStyles(styles)(ColorPickerForm)
