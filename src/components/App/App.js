
import styles from "./App.css";
import React from "react";
import ReactDom from "react-dom";

import { connect } from "react-redux";

import TransportControls from "../TransportControls/TransportControls";

//layout

import Section from "../layout/sections/Section";
import WaveformSection from "../layout/sections/waveform-section/WaveformSection";
import AudioEngine from "../../AudioEngine/AudioEngine";

import Waveforms from '../WaveformComponents/Waveforms/Waveforms'

let ae = new AudioEngine();

const App = (props) => {
	return (
		<div className={styles.Main}>
			<Section>
				<TransportControls />
			</Section>
			<WaveformSection>
				<Waveforms />
			</WaveformSection>
		</div>
	);
};


export default App

