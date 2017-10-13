import React from "react";
import Waveform from "../Waveform/Waveform";
import Styles from "./Waveforms.css";
import { connect } from "react-redux";

const Waveforms = props => {

	const waveforms = Object.values(props.waveforms)

	return (
		<div className={Styles.Main}>
			{waveforms.map((waveform, idx) => (
				<Waveform waveformId={waveform.id} key={idx} />
			))}
		</div>
	);
};

const mapStateToProps = state => ({
	waveforms: state.waveforms
});

export default connect(mapStateToProps)(Waveforms);
