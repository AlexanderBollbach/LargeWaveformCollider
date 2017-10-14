import React from 'react'
import Styles from './ModeTab.css'

export default ({ name, handleClick, setMode, active }) => {
	return (
		<div className={active ? Styles.ModeSelected : Styles.Mode} onClick={() => handleClick(name)}>
			<div className={Styles.ModeText}>{name}</div>;
		</div>
	);
};