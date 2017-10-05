export default function rootReducer(state = {}, action) {
	
	switch (action.type) {
		case 'NEW_BUFFER':
			return Object.assign({}, state, {mainBuffer: action.samples})
		default:
			return state;
	}
}