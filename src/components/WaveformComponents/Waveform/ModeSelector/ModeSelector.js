import React from "react";
import Styles from "./ModeSelector.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setMode } from "_redux/actions/Waveform";

const Mode = ({ name, handleClick, setMode, active }) => {
	return (
		<div className={active ? Styles.ModeSelected : Styles.Mode} onClick={() => handleClick(name)}>
			<div className={Styles.ModeText}>{name}</div>;
		</div>
	);
};

const ModeSelector = ({ modes, id, setMode, activeMode }) => {
	return (
		<div className={Styles.Main}>
			{modes.map(mode => (
				<Mode
					active={mode == activeMode}
					key={mode}
					name={mode}
					handleClick={mode => setMode(id, mode)}
				/>
			))}
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	var waveform = state.waveforms.byId[ownProps.id];
	return {
		modes: waveform.modes,
		activeMode: waveform.activeMode,
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ setMode }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModeSelector);
