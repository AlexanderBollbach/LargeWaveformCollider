import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MomentaryButton from "../buttons/MomentaryButton/MomentaryButton";
import styles from './TransportControls.css'

import { playPause,newWaveform } from "reduxAlias/actions";


const TransportControls = props => {
	return (
		<div className={styles.Main}>
		<MomentaryButton
			clickHandler={props.playPause}
			title={props.isPlaying ? "pause" : "play"}
		/>
		<MomentaryButton
			clickHandler={props.newWaveform}
			title={'new waveform'}
		/>

		</div>

	);
};

export default connect(
	state => ({
		isPlaying: state.transportControls.isPlaying
	}),
	dispatch => bindActionCreators({ playPause, newWaveform }, dispatch)
)(TransportControls);
