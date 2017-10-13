import DSP from "srcAlias/dsp/DSP";

export default function samplesReducer(state, action) {
	switch (action.type) {
		case "NEW_BUFFER":
			switch (action.bufferPreset) {
				case "sinSmall":
					return new DSP().generateWaveform1(500);
				case "squareSmall":
					return new DSP().square(500);
				case "sinMedium":
					return new DSP().generateWaveform1(1000);
				case "sinLarge":
					return new DSP().generateWaveform1(5000);
			}
	}
}
