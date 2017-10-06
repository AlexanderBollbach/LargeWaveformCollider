import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setZoom } from 'reduxAlias/reducers/WaveformReducer'
import Stats from './WaveformStats/WaveformStats'
import Visualizer from './WaveformVisualizer/WaveformVisualizer'

const Waveform = props => {

	const style={
		display:"grid",
		gridTemplateRows:"1fr 1fr"
	}
	
	return (
		<div style={style}>
			<Stats id={props.id} />
			<Visualizer id={props.id} />
		</div>
	);
};

export default Waveform 