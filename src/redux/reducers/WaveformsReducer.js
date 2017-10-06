import waveformReducer from "./WaveformReducer";
import { INITIAL_STATE as INITIAL_WAVEFORM_STATE } from "./WaveformReducer";

const INITIAL_WAVEFORMS_STATE = { allIds: [], byId: {} };

function waveformsReducer(state = INITIAL_WAVEFORMS_STATE, action) {
	if (action.type.startsWith("waveform/")) {
		const waveform = state.byId[action.id];
		const newByIds = {
			...state.byId,
			[action.id]: waveformReducer(waveform, action)
		};
		return Object.assign({}, state, { byId: newByIds });
	}

	switch (action.type) {
		case "waveforms/NEW_WAVEFORM":
		const newId = state.allIds.length
			return {
				allIds: [...state.allIds, newId],
				byId: { ...state.byId, [newId]: INITIAL_WAVEFORM_STATE }
			};
	}

	return state;
}

// actions

export function newWaveform() {
	return {
		type: "waveforms/NEW_WAVEFORM"
	};
}

export default waveformsReducer;
