import sizes from "./sizes"

export default {
	navbar: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		height: "6vh"
	},
	logo: {
		marginRight: 15,
		padding: "0 13px",
		fontSize: 22,
		backgroundColor: "#eceff1",
		fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen',
		Ubuntu: ', Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
		height: "100%",
		display: "flex",
		alignItems: "center",
		"& a": {
			textDecoration: "none",
			color: "black"
		},
		[sizes.down("xs")]: {
			display: "none"
		}
	},
	slider: {
		width: "340px",
		margin: "0 10px",
		display: "inline-block",
		"& rc-slider-rail": {
			height: "8px"
		},
		"& rc-slider-track": {
			backgroundColor: "transparent"
		},
		"& .rc-slider-handle, .rc-slider-handle:active,	.rc-slider-handle:focus, .rc-slider-handle:hover": {
			backgroundColor: "green",
			outline: "none",
			border: "2px solid green",
			boxShadow: "none",
			width: 13,
			height: 13,
			marginLeft: "-7px",
			marginTop: "-3px"
		},
		[sizes.down("sm")]: {
			width: "150px"
		}
	},
	selectContainer: {
		marginLeft: "auto",
		marginRight: "1rem"
	},
	selectFormat: {
		width: 300
	}
}
