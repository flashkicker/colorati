export default {
	root: {
		backgroundColor: "white",
		borderRadius: "5px",
		padding: "0.5rem",
		position: "relative",
		overflow: "hidden",
		border: "1px solid black",
		cursor: "pointer",
		"&:hover svg": {
			opacity: 1
		}
	},
	colorsStyle: {
		backgroundColor: "#dae1e4",
		height: "100px",
		width: "100%",
		borderRadius: "5px",
		overflow: "hidden"
	},
	emojiStyle: {
		marginLeft: "0.5rem",
		fontSize: "1.5rem"
	},
	title: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0",
		color: "black",
		paddingTop: "0.5rem",
		fontSize: "1rem",
		position: "relative"
	},
	miniColor: {
		height: "25%",
		width: "20%",
		float: "left",
		margin: "0",
		position: "relative"
	},
	delete: {},
	deleteIcon: {
		color: "white",
		backgroundColor: "#eb3d30",
		width: "20px",
		position: "absolute",
		right: "0px",
		top: "0px",
		padding: "10px",
		zIndex: 10,
		opacity: 0,
		transition: "all 0.3s ease-in-out !important"
	}
}
