import React from "react";
import Styles from "./ModeSelector.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateMode } from "_redux/waveforms/Actions";

import ModeTab from './ModeTab'

const ModeSelector = ({ modes, activeMode, waveformId, updateMode}) => {
	return (
		<div className={Styles.Main}>
			{modes.map(mode => (
				<ModeTab
					active={mode == activeMode}
					key={mode}
					name={mode}
					handleClick={mode => updateMode(waveformId, mode)}
				/>
			))}
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
		modes: state.waveforms[ownProps.waveformId].modes,
		activeMode: state.waveforms[ownProps.waveformId].activeMode,
	})

const mapDispatchToProps = dispatch => bindActionCreators({ updateMode }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModeSelector);
