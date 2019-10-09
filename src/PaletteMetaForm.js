import React, { Component } from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import { Picker } from "emoji-mart"
import "emoji-mart/css/emoji-mart.css"

class PaletteMetaForm extends Component {
	state = {
		stage: "form",
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

	handleClose = () => {
		this.props.hideForm()
		this.setState({ newPaletteName: "" })
	}

	showEmojiPicker = () => {
		this.setState({ stage: "emoji" })
	}

	savePalette = emoji => {
		const palette = {
			paletteName: this.state.newPaletteName,
			emoji: emoji.native
		}

		this.props.handleSavePalette(palette)
	}

	render() {
		const { newPaletteName } = this.state

		return (
			<div>
				<Dialog open={this.state.stage === "emoji"} onClose={this.handleClose}>
					<DialogTitle>Choose a Palette Emoji</DialogTitle>
					<Picker set="emojione" onSelect={this.savePalette} />
				</Dialog>
				<Dialog
					open={this.state.stage === "form"}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
				>
					<ValidatorForm onSubmit={this.showEmojiPicker}>
						<DialogTitle id="form-dialog-title">
							Choose a Palette Name
						</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Please enter a name for your new palette and make sure that name
								is unique. You will also need to choose an emoji for your
								palette.
							</DialogContentText>
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
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} color="primary">
								Cancel
							</Button>
							<Button variant="contained" color="primary" type="submit">
								Save Palette
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
		)
	}
}

export default PaletteMetaForm
