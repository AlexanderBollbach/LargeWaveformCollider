import React from 'react'
import Styles from './ControlSliders.css'
import Slider from "Components/controls/sliders/Slider";


const ControlSliders = () => {
	return (
		<div className={Styles.Main}>
			<Slider />
			<Slider />
			<Slider />
		</div>
		
		)
}

export default ControlSliders