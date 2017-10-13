import React from "react";
import Styles from './WaveformRenderer.css'

export default class WaveformDrawer extends React.Component {
	constructor(props) {
		super(props);

		this.WAVEFORM_COLOR = "white";
		this.isDragging = false;
		this.canvas = null;

		// window.onresize = e => {
		// 	this.resizeCanvas();
		// };
	}

	resizeCanvas() {
		this.canvasRef.width = this.canvasRef.clientWidth;
		this.canvasRef.height = this.canvasRef.clientHeight;
		this.renderCanvas(this.canvasRef);
	}

	render() {
		return (
			<div className={Styles.CanvasContainer}>
			<canvas
			className={Styles.WaveformCanvas}
				width={0}
				height={0}
				
				ref={ref => {
					this.canvasRef = ref
					if (ref) {
						this.resizeCanvas();
					}	
				}}
			/>
			</div>
		);
	}

	renderCanvas(canvas) {
		if (!canvas) {
			return;
		}
		const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.strokeStyle = this.WAVEFORM_COLOR;
		ctx.strokeRect(0,0,canvas.width,canvas.height)
		ctx.lineWidth = 1
		ctx.beginPath();

		const numBlocks = canvas.width * 0.8
		const blockSize = canvas.width / numBlocks; // lines per block

		for (var line = 0; line < canvas.width; line += blockSize) {
			const index = Math.floor(
				line / canvas.width * this.props.samplesToDraw.length
			);
			const amp = this.props.samplesToDraw[index];
			drawBlock(amp, line, blockSize);
		}

		ctx.stroke();

		function drawBlock(amp, line, blockSize) {
			for (let i = 0; i < blockSize; i++) {
				drawLine(line + i, amp);
			}
		}

		function drawLine(x, amp) {
			const midY = canvas.height / 2;
			var lineHeight = midY * amp;
			ctx.moveTo(x, midY);
			ctx.lineTo(x, midY + lineHeight);
		}
	}
}
