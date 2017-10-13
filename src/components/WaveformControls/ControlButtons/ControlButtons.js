import React from "react";
import Styles from "./ControlButtons.css";
import MomentaryButton from "Components/controls/buttons/MomentaryButton/MomentaryButton";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";



// actions

import { playPause, newBuffer } from "_redux/waveforms/Actions";

const Controls = ({ /*actions*/ playPause, /*state*/ newBuffer }) => {
	return (
		<div className={Styles.Main}>
				<MomentaryButton
					clickHandler={() => playPause(true)}
					title={"play/pause"}
				/>
				<MomentaryButton
					clickHandler={() => newBuffer(null, 0, true)}
					title={"newBuffer1"}
				/>
				<MomentaryButton
					clickHandler={() => newBuffer(null, 1, true)}
					title={"newBuffer2"}
				/>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ playPause, newBuffer }, dispatch);
};

export default connect(null, mapDispatchToProps)(Controls);
