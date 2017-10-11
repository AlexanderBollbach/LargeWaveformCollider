import React from 'react'
import Styles from './AddWaveform.css'
import MomentaryButton from 'Components/controls/buttons/MomentaryButton/MomentaryButton'

import { connect } from 'react-redux'
import { newWaveform } from '_redux/actions/WaveformsActions'
import { bindActionCreators } from 'redux'

const AddWaveform = ({newWaveform}) => {
	return (
		<div className={Styles.Main}>
		<MomentaryButton size={"200%"} title={"+"} clickHandler={newWaveform} />
		</div>
		)
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({newWaveform}, dispatch)
}

export default connect(null,  mapDispatchToProps)(AddWaveform)