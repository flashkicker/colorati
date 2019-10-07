import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Link } from "react-router-dom"
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

		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div className="color-box" style={{ background }}>
					<div
						className={`copy-overlay ${copied && "show"}`}
						style={{ background }}
					/>
					<div className={`copy-msg ${copied && "show"}`}>
						<h1>COPIED!</h1>
						<p>{background}</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span>{name}</span>
						</div>
						<button className="copy-button">Copy</button>
					</div>
					{showMore && (
						<Link to={moreUrl} onClick={event => event.stopPropagation()}>
							<span className="see-more">More</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		)
	}
}

export default ColorBox
