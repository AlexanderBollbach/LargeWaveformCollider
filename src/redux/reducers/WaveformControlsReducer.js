

const INITIAL_STATE = {
	selectedWaveformId: 0
}

export default function waveformControlsReducer(state=INITIAL_STATE, action) {

	switch (action.type) {
		case "waveformControls/PLAY_PAUSE":
			return state
		case "waveformControls/SELECT_WAVEFORM":
			return {
				...state, selectedWaveformId: action.waveformId
			}
	}
	return state
}

