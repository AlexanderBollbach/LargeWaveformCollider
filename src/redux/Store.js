import { createStore, combineReducers } from "redux";
import {
	updateObject,
	updateItemInArray,
	updateMultipleItemsInArray
} from "./helpers/ImmutableHelpers";

import waveformControlsReducer from './reducers/WaveformControlsReducer'
import waveformsReducer from './reducers/WaveformsReducer'

import { processedSamples } from './reducers/Waveform'


const INITIAL_STATE = {
	
	waveforms: undefined
}

const rootReducer = function(state=INITIAL_STATE, action) {

	return { 
		waveforms: waveformsReducer(state.waveforms, action)
	}
}


const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
export { store };
