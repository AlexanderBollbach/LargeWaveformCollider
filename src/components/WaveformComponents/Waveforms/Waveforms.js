import React from 'react'
import Waveform from '../Waveform/Waveform'
import Styles from './Waveforms.css'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  waveforms: state.waveforms.allIds
})


const Waveforms = (props) => {
	return(
		<div className={Styles.Main}>
		{props.waveforms.map(id => (<Waveform id={id} />))}
		</div>
		)	
}

export default connect(mapStateToProps)(Waveforms)