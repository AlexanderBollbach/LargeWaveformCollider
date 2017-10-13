import React from 'react'
import Styles from './ControlSliders.css'

import Slider from "Components/controls/sliders/Slider";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setVolume } from '_redux/waveforms/Actions'


const ControlSliders = ({setVolume}) => {
	return (
		<div className={Styles.Main}>
			<Slider valueChanged={ (value) => setVolume(0, value) } />
			<Slider valueChanged={ (value) => setVolume(1, value) }/>
			<Slider valueChanged={ (value) => setVolume(2, value) }/>
			<Slider valueChanged={ (value) => setVolume(3, value) }/>
		</div>
		
		)
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({setVolume}, dispatch)
}

export default connect(null, mapDispatchToProps)(ControlSliders)