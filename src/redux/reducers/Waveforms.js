import waveformReducer from "./Waveform";
import { INITIAL_STATE as INITIAL_WAVEFORM_STATE } from "./Waveform";
import { processedSamples } from './Waveform'

const INITIAL_WAVEFORMS_STATE = { allIds: [0,1,2,3], byId: {0:INITIAL_WAVEFORM_STATE,1:INITIAL_WAVEFORM_STATE,2:INITIAL_WAVEFORM_STATE,3:INITIAL_WAVEFORM_STATE} };

function waveformsReducer(state = INITIAL_WAVEFORMS_STATE, action) {
	
	if (action.type.startsWith("waveform/")) {
		const waveform = state.byId[action.waveformId];
		const newByIds = {
			...state.byId,
			[action.waveformId]: waveformReducer(waveform, action)
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


// selectors

export function selectBuffers(waveforms) {
	return waveforms.allIds.map(id => processedSamples(waveforms.byId[id]))
}

export default waveformsReducer;
