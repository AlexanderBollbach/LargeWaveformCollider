import React from "react";
import Styles from "./Visualizer.css";
import WaveformDrawer from "./rendering/WaveformRenderer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
	setZoom,
	setFocus,
	setOffset
} from "_redux/actions/Waveform";
import { processedSamples } from "_redux/reducers/Waveform";
import { getMouseXYForElement } from "helpers/MouseControl";

import Stats from "./Stats/Stats";

class WaveformVisualizer extends React.Component {
	constructor(props) {
		super(props);

		this.mouseDownX = 0;
		this.mouseDownY = 0;

		this.onMouseDown = e => {
			e.preventDefault();
			this.isDragging = true;

			const { x, y } = getMouseXYForElement(e);
			const { width, height } = e.target.getBoundingClientRect();

			this.mouseDownX = x;
			this.mouseDownY = y;

			this.previousX = x;
			this.previousY = y;

			this.props.setFocus(this.props.id, x / width);
		};
		this.onMouseMove = e => {
			e.preventDefault();

			if (e.target.tagName != "CANVAS" || !this.isDragging) {
				this.isDragging = false;
				return;
			}

			const { x, y } = getMouseXYForElement(e);
			const { width, height } = e.target.getBoundingClientRect();

			const diffX = this.previousX - x;
			const diffY = (this.previousY - y) * 0.1;

			this.props.setZoom(this.props.id, diffY);
			this.props.setOffset(this.props.id, diffX / width);

			this.previousX = x;
			this.previousY = y;
		};
		this.onMouseUp = e => {
			e.preventDefault();
			this.isDragging = false;
		};
	}
	// <Stats id={this.props.id} />
	render() {
		return (
			<div className={Styles.Main}>
			
				<WaveformDrawer
					mouseMoveHandler={this.onMouseMove}
					mouseDownHandler={e => {
						this.onMouseDown(e);
					}}
					mouseUpHandler={this.onMouseUp}
					samplesToDraw={this.props.getSamples}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		getSamples: processedSamples(state.waveforms.byId[ownProps.id])
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ setZoom, setFocus, setOffset }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WaveformVisualizer);
