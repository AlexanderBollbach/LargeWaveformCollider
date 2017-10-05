import { createStore, combineReducers } from "redux";
import {
	updateObject,
	updateItemInArray,
	updateMultipleItemsInArray
} from "./helpers/ImmutableHelpers";

import mainBuffer from "./reducers/MainBuffer";
import waveformReducer from "./reducers/WaveformProcessor";
import transportControls from "./reducers/TransportControls";


function waveforms(state = [], action) {
	switch (action.type) {
		case "NEW_WAVEFORM":
			return [...state, waveformReducer(null, action)];
	}
	return updateItemInArray(state, action.id, (waveform) => {
		return waveformReducer(state[action.id], action)
	})	
}


const rootReducer = combineReducers({
	mainBuffer,
	waveforms,
	transportControls
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export { store };
