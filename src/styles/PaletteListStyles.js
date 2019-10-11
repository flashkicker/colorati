import sizes from "./sizes"
import bg from "./bg.svg"

export default {
	"@global": {
		".fade-exit": {
			opacity: 1
		},
		".fade-exit-active": {
			opacity: 0,
			transition: "opacity 500ms ease-out"
		}
	},
	root: {
		backgroundColor: "#439b62",
		backgroundImage: `url(${bg})`,
		/* background by SVGBackgrounds.com */
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		overflow: "auto"
	},
	container: {
		width: "80%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
		paddingBottom: "15px",
		[sizes.down("xs")]: {
			width: "60%"
		}
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white",
		alignItems: "center",
		"& a": {
			textDecoration: "none",
			color: "white"
		}
	},
	miniPalettes: {
		boxSizing: "border-box",
		justifyContent: "center",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(4, 20%)",
		gridGap: "1.5rem",
		[sizes.down("sm")]: {
			gridTemplateColumns: "repeat(2, 50%)"
		},
		[sizes.down("xs")]: {
			gridTemplateColumns: "repeat(1, 100%)"
		}
	}
}
