export default function transportControlsReducer(state = {}, action) {

	switch (action.type) {

		case 'PLAY_PAUSE':
			return Object.assign({}, state, {isPlaying: !state.isPlaying})
		default:
			return state;
	}
}