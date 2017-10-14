import React from "react";
import Slider from "Components/controls/sliders/Slider";
import Styles from "./Mode2.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
	updateLength,
	updateSkipStride,
	updateSkipPhase,
	updateOffset
} from "_redux/waveforms/Actions";

import {
	selectLength,
	selectSkipStride,
	selectSkipPhase,
	selectOffset
} from "_redux/waveforms/Reducer";

const Mode2 = ({
	waveformId,
	updateSkipStride,
	updateSkipPhase,
	updateLength,
	updateOffset,
	skipStride,
	skipPhase,
	length,
	offset
}) => {
	return (
		<div className={Styles.Main}>
			<Slider
				initialValue={length}
				valueChanged={value => updateLength(waveformId, value)}
			/>
			<Slider
				initialValue={skipStride}
				valueChanged={value => updateSkipStride(waveformId, value)}
			/>
			<Slider
				initialValue={skipPhase}
				valueChanged={value => updateSkipPhase(waveformId, value)}
			/>
			<Slider
				initialValue={offset}
				valueChanged={value => updateOffset(waveformId, value)}
			/>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	length: selectLength(state.waveforms[ownProps.waveformId]),
	offset: selectOffset(state.waveforms[ownProps.waveformId]),
	skipPhase: selectSkipPhase(state.waveforms[ownProps.waveformId]),
	skipStride: selectSkipStride(state.waveforms[ownProps.waveformId])
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			updateLength,
			updateSkipStride,
			updateSkipPhase,
			updateOffset
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Mode2);
