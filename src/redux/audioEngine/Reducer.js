
const INITIAL_STATE = {
	isPlaying: false,
}

export default function audioEngineReducer(state=INITIAL_STATE, action) {
	switch (action.type) {
		case "audio_engine/PLAY_PAUSE":
			return {
				...state,
				isPlaying: !state.isPlaying
			}
	}

	return state
}
