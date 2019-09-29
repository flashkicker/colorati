import React, { Component } from "react"
import ColorBox from "./ColorBox"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import "./palette.css"

class Palette extends Component {
	state = { level: 500 }

	changeLevel = level => {
		this.setState({ level })
	}

	render() {
		const { colors } = this.props.palette
		const { level } = this.state

		const colorBoxes = colors[level].map(color => {
			return <ColorBox background={color.hex} name={color.name} />
		})

		return (
			<div className="palette">
				<Slider
					defaultValue={level}
					min={100}
					max={900}
					step={100}
					onAfterChange={this.changeLevel}
				/>
				{/* navbar goes here */}
				<div className="palette-colors">{colorBoxes}</div>
				{/* footer goes here */}
			</div>
		)
	}
}

export default Palette
