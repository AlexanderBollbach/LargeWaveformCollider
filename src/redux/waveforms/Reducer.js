import DSP from "aaa/dsp/DSP";

const createWaveform = id => ({
	id: id,

	showMoreStats: false,
	volume: 0.0,

	dspRules: {
		waveType: "sin",
		length: 100,
		skipStride: 8,
		skipPhase: 0,
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

function updateDSPRulesWaveType(waveform, waveType) {
	return {
		...waveform,
		dspRules: {
			...waveform.dspRules,
			waveType: waveType
		}
	};
}

function updateDSPRulesLength(waveform, length) {
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
		volume: volume
	};
}

function waveformsReducer(state = INITIAL_WAVEFORMS_STATE, action) {
	switch (action.type) {
		case "waveforms/SET_LENGTH":
			return {
				...state,
				[action.waveformId]: updateDSPRulesLength(
					state[action.waveformId],
					action.length
				)
			};

		case "waveforms/SET_MODE":
			return {
				...state,
				[action.waveformId]: updateMode(
					state[action.waveformId],
					action.mode
				)
			};
		case "waveforms/SET_VOLUME":
			return {
				...state,
				[action.waveformId]: updateVolume(
					state[action.waveformId],
					action.volume
				)
			};
		case "waveforms/TOGGLE_MORE_STATS":
			return {
				...state,
				[action.waveformId]: toggleMoreState(state[action.waveformId])
			};

		case "waveforms/UPDATE_DSPRULES_WAVE_TYPE":
			return {
				...state,
				[action.waveformId]: updateDSPRulesWaveType(
					state[action.waveformId],
					action.waveType
				)
			};
				case "waveforms/SET_SKIPSTRIDE":
			return {
				...state,
				[action.waveformId]: updateSkipStride(
					state[action.waveformId],
					action.skipStride
				)
			};
				case "waveforms/SET_SKIPPHASE":
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

export const getSamplesWithId = (waveforms, id) => {
	console.log(id);
	console.log(waveforms[id].dspRules.length);

	return new DSP(waveforms[id].dspRules).generate()
};


export default waveformsReducer;
