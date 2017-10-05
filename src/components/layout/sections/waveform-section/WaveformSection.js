import React from 'react'
import Styles from './WaveformSection.css'

const WaveformSection = ({children, width}) => {

	return (
		<div className={Styles.Main}>
		{children}
		</div>
	)
}

export default WaveformSection