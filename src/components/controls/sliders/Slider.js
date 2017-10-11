import React from "react";
import Styles from "./Slider.css";
import { getRelativeMouseXY } from "helpers/MouseControl";

class Slider extends React.Component {
	
	constructor(props) {
		super(props);
		this.value = 0.5;
		this.renderCanvas = this.renderCanvas.bind(this);
		this.canvas = null;
		this.isDragging = false;
	}

	render() {
		return (
			<div className={Styles.CanvasContainer}>
				<canvas
					className={Styles.Canvas}
					width={0}
					height={0}
					onMouseDown={e => {
						this.isDragging = true;
					}}
					onMouseMove={e => {
						if (!this.isDragging){
							return
							}
						var x = getRelativeMouseXY(e).x;
						this.value = x
						this.renderCanvas()
					}}
					onMouseUp={e => {
						this.isDragging = false
					}}
					ref={canvas => {
						if (canvas) {
							this.canvas = canvas;
							this.renderCanvas();
						}
					}}
				/>
			</div>
		);
	}

	renderCanvas() {
		if (!this.canvas) {
			return;
		}
		var rect = this.canvas.parentNode.getBoundingClientRect();
		this.canvas.width = rect.width;
		this.canvas.height = rect.height;
		var ctx = this.canvas.getContext("2d");
		ctx.strokeStyle = "white"
		ctx.strokeRect(0,0,this.canvas.width, this.canvas.height)
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, this.canvas.width * this.value, this.canvas.height);

	}
}

export default Slider;
