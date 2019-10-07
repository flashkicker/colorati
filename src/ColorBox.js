import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Link } from "react-router-dom"
import chroma from "chroma-js"

import "./color-box.css"

class ColorBox extends Component {
	state = {
		copied: false
	}

	changeCopyState = () => {
		this.setState({ copied: true }, () => {
			setTimeout(() => {
				this.setState({ copied: false })
			}, 1500)
		})
	}

	render() {
		const { name, background, moreUrl, showMore } = this.props
		const { copied } = this.state
		const isDarkColor = chroma(background).luminance() <= 0.08
		const isLightColor = chroma(background).luminance() >= 0.7

		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div className="color-box" style={{ background }}>
					<div
						className={`copy-overlay ${copied && "show"}`}
						style={{ background }}
					/>
					<div className={`copy-msg ${copied && "show"}`}>
						<h1>COPIED!</h1>
						<p className={isLightColor && "dark-text"}>{background}</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span className={isDarkColor && "light-text"}>{name}</span>
						</div>
						<button className={`copy-button ${isLightColor && "dark-text"}`}>
							COPY
						</button>
					</div>
					{showMore && (
						<Link to={moreUrl} onClick={event => event.stopPropagation()}>
							<span className={`see-more ${isLightColor && "dark-text"}`}>
								MORE
							</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		)
	}
}

export default ColorBox
