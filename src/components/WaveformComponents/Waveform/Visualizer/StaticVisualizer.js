import React from "react";
import Styles from "./StaticVisualizer.css";
import WaveformDrawer from "./rendering/WaveformRenderer";
import { connect } from "react-redux";

class StaticVisualizer extends React.Component {
	constructor(props) {
		super(props);

	}
	
	render() {
		return (
			<div className={Styles.Main}>			
				<WaveformDrawer
					samplesToDraw={this.props.samples}
				/>
			</div>
		);
	}
}



export default StaticVisualizer
