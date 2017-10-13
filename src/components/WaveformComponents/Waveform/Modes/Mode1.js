import React from 'react'
import MomentaryButton from "Components/controls/buttons/MomentaryButton/MomentaryButton";
import Styles from './Mode1.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateDSPRulesWaveType } from '_redux/waveforms/Actions'


const Mode1 = ({waveformId, updateDSPRulesWaveType}) => {
	return (
		<div className={Styles.Main}>
		<MomentaryButton title={"sin"} clickHandler={ () => updateDSPRulesWaveType(waveformId, "sin") } />
		<MomentaryButton title={"square"} clickHandler={ () => updateDSPRulesWaveType(waveformId, "square") } />
		<MomentaryButton title={"try"} clickHandler={ () => updateDSPRulesWaveType(waveformId, "tri") } />
		<MomentaryButton title={"saw"} clickHandler={ () => updateDSPRulesWaveType(waveformId, "saw") } />
		</div>
		)
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({updateDSPRulesWaveType}, dispatch)
}

export default connect(null, mapDispatchToProps)(Mode1)
