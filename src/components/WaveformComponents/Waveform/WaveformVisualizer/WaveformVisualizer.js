import React from "react";
import styles from "./WaveformVisualizer.css";
import WaveformDrawer from "./rendering/WaveformRenderer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setZoom, setFocus, setOffset } from "reduxAlias/reducers/WaveformReducer";
import { processedSamples } from "reduxAlias/reducers/WaveformReducer";
import {
	getMouseXYForElement
} from "./helpers/MouseControlsHelpers";

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
		window.onmousemove = e => {
			e.preventDefault();

			if (e.target.tagName != "CANVAS" || !this.isDragging) {
				this.isDragging = false;
				return;
			}

			const { x, y } = getMouseXYForElement(e);
			const { width, height } = e.target.getBoundingClientRect();

			const diffX = this.previousX - x;
			const diffY = (this.previousY - y) * 0.01;

			this.props.setZoom(this.props.id, diffY);
			this.props.setOffset(this.props.id, diffX / width);

			this.previousX = x;
			this.previousY = y;
		};
		window.onmouseup = e => {
			e.preventDefault();
			this.isDragging = false;
		};
	}

	render() {
		return (
			<WaveformDrawer
				mouseDownHandler={e => {
					this.onMouseDown(e);
				}}
				samplesToDraw={this.props.getSamples}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		getSamples: processedSamples(state.waveforms.byId[ownProps.id])
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({setZoom, setFocus, setOffset}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(WaveformVisualizer);

