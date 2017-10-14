import React from 'react'
import MomentaryButton from "Components/controls/buttons/MomentaryButton/MomentaryButton";
import Styles from './Mode1.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateWaveType } from '_redux/waveforms/Actions'


const Mode1 = ({waveformId, updateWaveType}) => {
	return (
		<div className={Styles.Main}>
		<MomentaryButton title={"sin"} clickHandler={ () => updateWaveType(waveformId, "sin") } />
		<MomentaryButton title={"square"} clickHandler={ () => updateWaveType(waveformId, "square") } />
		<MomentaryButton title={"try"} clickHandler={ () => updateWaveType(waveformId, "tri") } />
		<MomentaryButton title={"saw"} clickHandler={ () => updateWaveType(waveformId, "saw") } />
		</div>
		)
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({updateWaveType}, dispatch)
}

export default connect(null, mapDispatchToProps)(Mode1)
