import React from "react";
import Visualizer from "./Visualizer/Visualizer";
import Styles from "./Waveform.css";
import ModeSelector from './ModeSelector/ModeSelector'
import Modes from './Modes/Modes'
import { connect } from 'react-redux'

const Waveform = ({ id, selectWaveform, activeMode }) => {
	return (
		<div className={Styles.Main}>
			
			<Visualizer id={id} />
			<ModeSelector id={id} />
			<Modes waveformId={id} modeId={activeMode} />
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
		activeMode: state.waveforms.byId[ownProps.id].activeMode
	})

export default connect(mapStateToProps)(Waveform)
