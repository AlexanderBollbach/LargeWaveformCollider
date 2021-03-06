import React from "react";

import styles from "./MomentaryButton.css";

class MomentaryButton extends React.Component {
	constructor(props) {
		super(props);

		this.ref = null;

		this.state = {
			isHighlighted: false
		};

		this.buttonClicked = this.buttonClicked.bind(this);
		this.transitionEndHandler = this.transitionEndHandler.bind(this);
	}

	componentDidMount() {
		this.ref.addEventListener(
			"animationend",
			this.transitionEndHandler,
			false
		);
	}

	componentWillUnmount() {
		this.ref.removeEventListener("animationend", this.transitionEndHandler);
	}

	transitionEndHandler(e) {
		this.setState({ isHighlighted: false });
	}

	buttonClicked(e) {
		this.props.clickHandler();
		this.setState({ isHighlighted: true });
	}

	render() {

		const style = {
			fontSize: this.props.size || "100%",
		}

		return (
			<div
				ref={ref => (this.ref = ref)}
				className={
					this.state.isHighlighted ? styles.Animated : styles.Main
				}
				onClick={this.buttonClicked}
			>
				<span style={style} className={styles.center_vertically}>
					{this.props.isSelected ? "[" + this.props.title + "]" : this.props.title}
				</span>
			</div>
		);
	}
}

export default MomentaryButton;
