import React from "react";
import styles from "./WaveformStats.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
	processedSamples,
	samplesOnScreen,
	startingSample,
	endingSample,
	offsetInSamples,
	selectedSampleOffset
} from "reduxAlias/reducers/WaveformProcessor";
import {constructStats} from './WaveformStatsHelpers'

const Stat = ({ name, value }) => {
	return (
		<div className={styles.Stat}>
			<div>{name}</div>
			<div>{roundThousandth(value)}</div>
		</div>
	);
};

const WaveformStats = (props) => {

	const stats = constructStats(props)

	return (
		<div className={styles.Main}>
			{stats.map((stat, idx) => (
				<Stat key={idx} name={stat.name} value={stat.value} />
			))}
		</div>
	);
};

function roundThousandth(num) {
	return Math.round(num * 1000) / 1000;
}

const mapStateToProps = (state, ownProps) => {

	const thisWaveform = state.waveforms[ownProps.id]

	return {
		selectedSample: thisWaveform.selectedSample,
		samplesOnScreen: samplesOnScreen(thisWaveform),
		zoom: thisWaveform.zoom,
		offset: thisWaveform.offset,
		focus: thisWaveform.focus,
		startingSample: startingSample(thisWaveform),
		endingSample: endingSample(thisWaveform),
		samplesOffset: offsetInSamples(thisWaveform),
		selectedSampleOffset: selectedSampleOffset(thisWaveform)
	}
}

export default connect(mapStateToProps)(WaveformStats);

