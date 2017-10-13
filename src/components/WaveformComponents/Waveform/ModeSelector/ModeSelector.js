import React from "react";
import Styles from "./ModeSelector.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setMode } from "_redux/waveforms/Actions";

const Mode = ({ name, handleClick, setMode, active }) => {
	return (
		<div className={active ? Styles.ModeSelected : Styles.Mode} onClick={() => handleClick(name)}>
			<div className={Styles.ModeText}>{name}</div>;
		</div>
	);
};

const ModeSelector = ({ modes, waveformId, setMode, activeMode }) => {
	return (
		<div className={Styles.Main}>
			{modes.map(mode => (
				<Mode
					active={mode == activeMode}
					key={mode}
					name={mode}
					handleClick={mode => setMode(waveformId, mode)}
				/>
			))}
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
		modes: state.waveforms[ownProps.waveformId].modes,
		activeMode: state.waveforms[ownProps.waveformId].activeMode,
	})

const mapDispatchToProps = dispatch => bindActionCreators({ setMode }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModeSelector);
