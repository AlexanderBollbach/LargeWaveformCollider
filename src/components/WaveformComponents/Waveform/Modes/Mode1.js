import React from 'react'
import MomentaryButton from "Components/controls/buttons/MomentaryButton/MomentaryButton";
import Styles from './Mode1.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { newBuffer } from '_redux/actions/Waveform'


const Mode1 = ({waveformId, newBuffer}) => {
	return (
		<div className={Styles.Main}>
		<MomentaryButton title={"square - small"} clickHandler={ () => newBuffer(waveformId, "squareSmall") } />
		<MomentaryButton title={"sin - small"} clickHandler={ () => newBuffer(waveformId, "sinSmall") } />
		<MomentaryButton title={"sin - medium"} clickHandler={ () => newBuffer(waveformId, "sinMedium") } />
		<MomentaryButton title={"sin - large"} clickHandler={ () => newBuffer(waveformId, "sinLarge") } />
		</div>
		)
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({newBuffer}, dispatch)
}

export default connect(null, mapDispatchToProps)(Mode1)
