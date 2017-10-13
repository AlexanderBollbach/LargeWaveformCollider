import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { playPause } from '_redux/actions/AudioEngine'
import MomentaryButton from "Components/controls/buttons/MomentaryButton/MomentaryButton";

import Styles from "./Selector.css";

const Selector = ({ playPause }) => {
	return (
		<div className={Styles.Main}>
			<MomentaryButton
				title={"playPause"}
				clickHandler={() => playPause()}
			/>;
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({playPause}, dispatch)
}

export default connect(null, mapDispatchToProps)(Selector);
