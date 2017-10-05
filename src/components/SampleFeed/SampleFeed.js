import styles from "./SampleFeed.css";
import ToggleActionButton from "../buttons/ToggleActionButton/ToggleActionButton";
import React from "react";
import WebSocket from "../../WebSocket/WebSocket";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { newBuffer } from "../../redux/actions";

import DSP from '../../dsp/DSP'

import MomentaryButton from '../buttons/MomentaryButton/MomentaryButton'

const SampleFeed = props => {
	return (
		<div className={styles.SampleFeed}>
				<MomentaryButton
					clickHandler={
						() => {
							const buffer = new DSP().generateWaveform1(1000)
							props.newBuffer(buffer)
						}
					}
					title={"wave1"}
				/>
				<MomentaryButton
					clickHandler={
						() => {
							const buffer = new DSP().generateWaveform2(1000)
							props.newBuffer(buffer)
						}
					}
					title={"wave2"}
				/>
				<MomentaryButton
					clickHandler={
						() => {
							const buffer = new DSP().generateWaveform3(1000)
							props.newBuffer(buffer)
						}
					}
					title={"wave3"}
				/>
				<MomentaryButton
					clickHandler={
						() => {
							const buffer = new DSP().generateWaveform1(5000)
							props.newBuffer(buffer)
						}
					}
					title={"wave4"}
				/>
		</div>
	);
};
export default connect(null, dispatch =>
	bindActionCreators(
		{
			newBuffer
		},
		dispatch
	)
)(SampleFeed);
