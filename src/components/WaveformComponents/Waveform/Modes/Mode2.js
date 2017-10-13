import React from 'react'
import Slider from "Components/controls/sliders/Slider";
import Styles from './Mode2.css'

const Mode2 = () => {
	return (

		<div className={Styles.Main}>
			<Slider valueChanged={ (value) => setVolume(0, value) } />
			<Slider valueChanged={ (value) => setVolume(1, value) }/>
			<Slider valueChanged={ (value) => setVolume(2, value) }/>
			<Slider valueChanged={ (value) => setVolume(3, value) }/>
		</div>
		)
}

export default Mode2