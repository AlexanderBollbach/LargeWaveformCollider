import React from "react";
import StaticVisualizer from "./Visualizer/StaticVisualizer";
import Styles from "./Waveform.css";
import ModeSelector from "./ModeSelector/ModeSelector";
import Modes from "./Modes/Modes";
import { connect } from "react-redux";
import { getSamplesWithId } from "_redux/waveforms/Reducer";
// import Stats from "./Stats/Stats";
// <Stats id={this.props.id} />

const Waveform = ({ waveformId, activeMode, samples }) => {
	return (
		<div className={Styles.Main}>
			<StaticVisualizer samples={samples} />
			<ModeSelector waveformId={waveformId} />
			<Modes waveformId={waveformId} modeId={activeMode} />
			
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	samples: getSamplesWithId(state.waveforms, ownProps.waveformId),
	activeMode: state.waveforms[ownProps.waveformId].activeMode
});

export default connect(mapStateToProps)(Waveform);
