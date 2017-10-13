class DSP {
	constructor(dspRules) {
		this.phase = 0;
		this.length = dspRules.length;
		this.waveType = dspRules.waveType;
		this.skipStride = dspRules.skipStride;
		this.skipPhase = dspRules.skipPhase;
	}

	generate() {
		var samples;

		switch (this.waveType) {
			case "sin":
				samples = this.genSin(this.length);
				break;
			case "square":
				samples = this.genSquare(this.length);
				break;
			case "tri":
				samples = this.genTri(this.length);
				break;
			case "saw":
				samples = this.genSaw(this.length);
				break;
		}

		var stride = 0;
		var strideOn = false;

		for (let i = this.skipPhase; i < samples.length; i++) {
			if (stride > this.skipStride) {
				strideOn = !strideOn;
				stride = 0;
			}

			stride++;

			// zeros for negative indexing
			if (i < 0) {
				samples[i] = 0;
				return;
			}

			samples[i] = strideOn ? samples[i] : 0;
		}

		return samples;
	}

	genSin(length) {
		var newBuffer = [];
		const phaseIncrement = 2 * Math.PI * 0.01;

		for (var i = 0; i < length; i++) {
			this.phase += phaseIncrement;

			newBuffer[i] = Math.sin(this.phase);

			if (this.phase >= 2 * Math.PI) {
				this.phase = this.phase - 2 * Math.PI;
			}
		}
		return newBuffer;
	}
	genSquare(length) {
		var buffer = [];

		const waveLength = length / 50;

		var waveLengthTracker = 0;
		var upDown = false;

		for (let i = 0; i < length; i++) {
			if (waveLengthTracker > waveLength) {
				waveLengthTracker = 0;
			}

			upDown = !upDown;

			buffer[i] = upDown ? 1 : 0;

			waveLengthTracker++;
		}

		return buffer;
	}

	genTri(length) {
		var newBuffer = [];

		var amp = 0;

		var upDown = false;

		for (var i = 0; i < length; i++) {
			amp += upDown ? 0.01 : -0.01;

			newBuffer[i] = amp;
		}
		return newBuffer;
	}

	genSaw(length) {
		var newBuffer = [];

		var amp = 1;

		for (var i = 0; i < length; i++) {
			amp -= 0.1;

			newBuffer[i] = amp;

			if (amp <= 0) {
				amp = 1;
			}
		}
		return newBuffer;
	}
}

export default DSP;
