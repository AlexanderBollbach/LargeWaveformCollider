import DSP from "aaa/dsp/DSP";

const createWaveform = id => ({
	id: id,
	showMoreStats: false,

	dspRules: {
		waveType: "sin",
		volume: 0.0,
		length: 100,
		skipStride: 8,
		skipPhase: 0,
		offset: 0.5
	},
	modes: ["a", "b", "c"],
	activeMode: "a"
});

const INITIAL_WAVEFORMS_STATE = {
	0: createWaveform(0),
	1: createWaveform(1),
	2: createWaveform(2),
	3: createWaveform(3)
};

function updateWaveType(waveform, waveType) {
	return {
		...waveform,
		dspRules: {
			...waveform.dspRules,
			waveType: waveType
		}
	};
}

function updateLength(waveform, length) {
	return {
		...waveform,
		dspRules: {
			...waveform.dspRules,
			length: length * 1500
		}
	};
}

function updateSkipStride(waveform, skipStride) {
	return {
		...waveform,
		dspRules: {
			...waveform.dspRules,
			skipStride: skipStride * 50
		}
	};
}

function updateOffset(waveform, offset) {
	return {
		...waveform,
		dspRules: {
			...waveform.dspRules,
			offset: offset
		}
	};
}

function updateSkipPhase(waveform, skipPhase) {
	return {
		...waveform,
		dspRules: {
			...waveform.dspRules,
			skipPhase: Math.floor(skipPhase * 50)
		}
	};
}

function updateMode(waveform, mode) {
	return {
		...waveform,
		activeMode: mode
	};
}

function updateVolume(waveform, volume) {
	return {
		...waveform,
		dspRules: {
			...waveform.dspRules,
			volume: volume
		}
	};
}

function waveformsReducer(state = INITIAL_WAVEFORMS_STATE, action) {
	switch (action.type) {
		case "waveforms/UPDATE_LENGTH":
			return {
				...state,
				[action.waveformId]: updateLength(
					state[action.waveformId],
					action.length
				)
			};

		case "waveforms/UPDATE_MODE":
			return {
				...state,
				[action.waveformId]: updateMode(
					state[action.waveformId],
					action.mode
				)
			};
		case "waveforms/UPDATE_VOLUME":
			return {
				...state,
				[action.waveformId]: updateVolume(
					state[action.waveformId],
					action.volume
				)
			};

		case "waveforms/UPDATE_WAVE_TYPE":
			return {
				...state,
				[action.waveformId]: updateWaveType(
					state[action.waveformId],
					action.waveType
				)
			};

		case "waveforms/UPDATE_OFFSET":
			return {
				...state,
				[action.waveformId]: updateOffset(
					state[action.waveformId],
					action.offset
				)
			};
		case "waveforms/UPDATE_SKIPSTRIDE":
			return {
				...state,
				[action.waveformId]: updateSkipStride(
					state[action.waveformId],
					action.skipStride
				)
			};
		case "waveforms/UPDATE_SKIPPHASE":
			return {
				...state,
				[action.waveformId]: updateSkipPhase(
					state[action.waveformId],
					action.skipPhase
				)
			};
	}

	return state;
}

export const selectSamplesFromWaveform = waveform => {
	let samples = new DSP(waveform.dspRules).generate();
	return samples;
};

export const selectSamplesWithId = (waveforms, id) => {
	let samples = new DSP(waveforms[id].dspRules).generate();
	return samples;
};

export const selectSamples = waveforms => {
	return Object.values(waveforms).map(waveform => ({
		samples: selectSamplesFromWaveform(waveform),
		volume: waveform.dspRules.volume
	}));
};

export const selectOffset = waveform => waveform.dspRules.offset;
export const selectLength = waveform => waveform.dspRules.length;
export const selectSkipStride = waveform => waveform.dspRules.skipPhase;
export const selectSkipPhase = waveform => waveform.dspRules.skipStride;

export default waveformsReducer;
