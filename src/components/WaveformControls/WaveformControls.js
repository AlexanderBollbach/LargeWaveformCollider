import React from "react";

import Selector from "./Selector/Selector";
import Buttons from "./ControlButtons/ControlButtons";
import Sliders from "./ControlSliders/ControlSliders";

import Styles from "./WaveformControls.css";

const WaveformControls = () => {
	return (
		<div className={Styles.Main}>
			<Selector />
			<div className={Styles.Info}>Large Waveform Collider</div>
			<Sliders />
		</div>
	);
};

export default WaveformControls;
