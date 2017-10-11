import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MomentaryButton from "Components/controls/buttons/MomentaryButton/MomentaryButton";


import Styles from './Selector.css'

const Selector = ({ waveformsIds, selectedWaveformId, selectWaveform }) => {
	return (
		<div className={Styles.Main}>
			{waveformsIds.map(waveformId => {
				
				return <MomentaryButton
					key={waveformId}
					isSelected={waveformId == selectedWaveformId}
					title={`${waveformId}`}
					clickHandler={ () => { 
						console.log(waveformId)
						selectWaveform(waveformId)
					 } }
				/>;
			})}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		waveformsIds: state.waveforms.allIds,
		// selectedWaveformId: state.waveformControls.selectedWaveformId
	};
};


export default connect(mapStateToProps, null)(Selector);

