import React from 'react'
import Slider from "Components/controls/sliders/Slider";
import Styles from './Mode2.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setLength, setSkipStride, setSkipPhase } from '_redux/waveforms/Actions'

const Mode2 = ({waveformId, setSkipStride,setSkipPhase, setLength}) => {
	return (

		<div className={Styles.Main}>
			<Slider valueChanged={ value => setLength(waveformId, value) } />
			<Slider valueChanged={ value => setSkipStride(waveformId, value) }/>
			<Slider valueChanged={ value => setSkipPhase(waveformId, value) }/>
			<Slider valueChanged={ value => console.log(value) }/>
		</div>
		)
}

const mapDispatchToProps = dispatch => bindActionCreators({setLength, setSkipStride, setSkipPhase}, dispatch)

export default connect(null, mapDispatchToProps)(Mode2)