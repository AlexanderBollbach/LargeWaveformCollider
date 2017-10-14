import React from 'react'
import Styles from './ControlSliders.css'

import Slider from "Components/controls/sliders/Slider";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateVolume } from '_redux/waveforms/Actions'


const ControlSliders = ({updateVolume}) => {
	return (
		<div className={Styles.Main}>
			<Slider valueChanged={ (value) => updateVolume(0, value) } />
			<Slider valueChanged={ (value) => updateVolume(1, value) }/>
			<Slider valueChanged={ (value) => updateVolume(2, value) }/>
			<Slider valueChanged={ (value) => updateVolume(3, value) }/>
		</div>
		
		)
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({updateVolume}, dispatch)
}

export default connect(null, mapDispatchToProps)(ControlSliders)