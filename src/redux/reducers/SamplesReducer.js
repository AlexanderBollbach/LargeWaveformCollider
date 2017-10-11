import DSP from "srcAlias/dsp/DSP";

export default function samplesReducer(state, action) {
	switch (action.type) {
		case "NEW_BUFFER":
			switch (action.bufferPresetID) {
				case 0:
					return new DSP().generateWaveform1(1000);
				case 1:
					return new DSP().generateWaveform1(500);
			}
	}
}
