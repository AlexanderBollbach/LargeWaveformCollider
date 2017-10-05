import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementWaveformStart } from "reduxAlias/actions";
import { waveformStart } from "reduxAlias/Store";
import Stats from './WaveformStats/WaveformStats'
import Visualizer from './WaveformVisualizer/WaveformVisualizer'

const Waveform = props => {

	const style={
		display:"grid",
		gridTemplateRows:"1fr 1fr"
	}
	return (
		<div style={style} onClick={() => props.incrementWaveformStart(props.id)}>
			<Stats id={props.id} />
			<Visualizer id={props.id} />
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		start: state.waveforms[ownProps.id].start
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ incrementWaveformStart }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Waveform);
