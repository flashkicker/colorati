import React, { Component } from "react"
import { withStyles } from "@material-ui/styles"
import { Link } from "react-router-dom"
import {
	Dialog,
	DialogTitle,
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText
} from "@material-ui/core"
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"
import { blue, red } from "@material-ui/core/colors"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import MiniPalette from "./MiniPalette"

import styles from "./styles/PaletteListStyles"

class PaletteList extends Component {
	state = {
		openDeleteDialog: false,
		deletingId: ""
	}

	openDialog = id => {
		this.setState({ openDeleteDialog: true, deletingId: id })
	}

	closeDialog = () => {
		this.setState({ openDeleteDialog: false, deletingId: "" })
	}

	handleDeletePalette = () => {
		this.props.deletePalette(this.state.deletingId)
		this.closeDialog()
	}

	goToPalette = id => {
		this.props.history.push(`/palette/${id}`)
	}

	render() {
		const { palettes, classes, deletePalette } = this.props
		const { root, container, nav, miniPalettes } = classes
		const { openDeleteDialog, deletingId } = this.state

		return (
			<div className={root}>
				<div className={container}>
					<nav className={nav}>
						<h1>colorati</h1>
						<Link to="/palette/new">
							<h4>Create New Palette</h4>
						</Link>
					</nav>

					<TransitionGroup className={miniPalettes}>
						{palettes.map(palette => {
							return (
								<CSSTransition classNames="fade" timeout={500} key={palette.id}>
									<MiniPalette
										handleClick={() => this.goToPalette(palette.id)}
										{...palette}
										// handleDeletePalette={deletePalette}
										openDialog={this.openDialog}
										key={palette.id}
									/>
								</CSSTransition>
							)
						})}
					</TransitionGroup>
				</div>
				<Dialog
					open={openDeleteDialog}
					onClose={this.closeDialog}
					aria-labelledby="delete-dialog-title"
				>
					<DialogTitle id="delete-dialog-title">
						Delete This Palette?
					</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDeletePalette}>
							<ListItemAvatar>
								<Avatar style={{ background: blue[100], color: blue[600] }}>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="Delete" />
						</ListItem>
						<ListItem button onClick={this.closeDialog}>
							<ListItemAvatar>
								<Avatar style={{ background: red[100], color: red[600] }}>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText secondary="Cancel" />
						</ListItem>
					</List>
				</Dialog>
			</div>
		)
	}
}

export default withStyles(styles)(PaletteList)
