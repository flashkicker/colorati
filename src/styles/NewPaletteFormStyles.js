import { DRAWER_WIDTH } from "../constants"
import sizes from "./sizes"

const drawerWidth = DRAWER_WIDTH

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
		alignItems: "center",
		[sizes.down("sm")]: {
			width: window.innerWidth
		}
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: "0 8px",
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
		width: "100%"
	},
	content: {
		flexGrow: 1,
		height: "calc(100vh - 70px)",
		padding: theme.spacing(0),
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
		margin: "0 3px",
		[sizes.down("xs")]: {
			marginRight: "0.5rem"
		}
	},
	button: {
		margin: "0 0.5rem",
		[sizes.down("xs")]: {
			margin: "0 0.2rem",
			padding: "0.3rem"
		}
	}
})

export default styles
