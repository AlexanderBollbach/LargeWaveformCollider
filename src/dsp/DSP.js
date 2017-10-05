
var phase = 0;




class DSP {



	generateWaveform1(length) {

		var newBuffer = []
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


	generateWaveform2(length) {

		var newBuffer = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]
		return newBuffer
	}
	generateWaveform3(length) {

		var newBuffer = [0,1,0,0,0]
		return newBuffer
	}

	generateWaveform4(length) {

		var newBuffer = []
		const phaseIncrement = 2 * Math.PI * 0.0001;

		for (var i = 0; i < length; i++) {
			phase += phaseIncrement;

			newBuffer[i] = Math.sin(phase);

			if (phase >= 2 * Math.PI) {
				phase = phase - 2 * Math.PI;
			}
		}
		return newBuffer;
	}


	generateWaveform5(length) {

		var newBuffer = []
		const phaseIncrement = 2 * Math.PI * 0.1;

		for (var i = 0; i < length; i++) {
			phase += phaseIncrement;

			newBuffer[i] = Math.sin(phase);

			if (phase >= 2 * Math.PI) {
				phase = phase - 2 * Math.PI;
			}
		}
		return newBuffer;
	}




}


export default DSP