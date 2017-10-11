import React from "react";

import styles from './ToggleActionButton.css'

export default class ToggleActionButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOn: false
		}

		const { onAction, offAction } = props

		this.clicked = () => {
			this.setState(
			 	prevState => ({isOn: !prevState.isOn }),
			 	() => ( this.state.isOn ? onAction() : offAction() )
			 )
		}
	}

	render() {
		const { onText, offText } = this.props
		return (
			<div 
			className={this.state.isOn ? styles.toggleButtonActive : styles.toggleButton }
			onClick={this.clicked}
			>
				{(this.state.isOn ? onText : offText)}
			</div>
		);
	}
}

// className={styles.Main}