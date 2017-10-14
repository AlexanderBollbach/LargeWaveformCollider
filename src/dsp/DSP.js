class DSP {
	
	constructor(dspRules) {
		this.dspRules = dspRules;
	}

	generate() {
		
		var samples;

		switch (this.dspRules.waveType) {
			case "sin":
				samples = this.genSin(this.dspRules.length);
				break;
			case "square":
				samples = this.genSquare(this.dspRules.length);
				break;
			case "tri":
				samples = this.genTri(this.dspRules.length);
				break;
			case "saw":
				samples = this.genSaw(this.dspRules.length);
				break;
		}

		var stride = 0;
		var strideOn = false;

		for (let i = this.dspRules.skipPhase; i < samples.length; i++) {
			
			if (stride > this.dspRules.skipStride) {
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

		// handle offset

		// inefficient probably..
		const offsetSamples = [];
		var offsetCounter = 0;

		const offsetFromMidpoint = 1 - this.dspRules.offset - 0.5

		const startingSamplesFromOffset = Math.floor(
			offsetFromMidpoint * samples.length
		);

		for (
			let i = startingSamplesFromOffset;
			i < startingSamplesFromOffset + samples.length;
			i++
		) {
			if (i < 0) {
				offsetSamples[offsetCounter] = 0;
			} else if (i > samples.length) {
				offsetSamples[offsetCounter] = 0;
			} else {
				offsetSamples[offsetCounter] = samples[i];
			}

			offsetCounter++;
		}

		return offsetSamples;
	}

	genSin(length) {
		var phase = 0;
		var newBuffer = [];
		const phaseIncrement = 2 * Math.PI * 0.01;

		for (var i = 0; i < length; i++) {
			phase += phaseIncrement;

			newBuffer[i] = Math.sin(phase);

			if (phase >= 2 * Math.PI) {
				phase = phase - 2 * Math.PI;
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
