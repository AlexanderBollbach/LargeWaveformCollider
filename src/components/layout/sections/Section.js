import React from 'react'
import Styles from './Section.css'

const Section = ({children, width}) => {

	return (
		<div className={Styles.Main}>
		{children}
		</div>
	)
}

export default Section