import { createStore, combineReducers } from "redux";
import {
	updateObject,
	updateItemInArray,
	updateMultipleItemsInArray
} from "./helpers/ImmutableHelpers";


import { processedSamples } from './reducers/Waveform'
import waveformsReducer from './reducers/Waveforms'
import audioEngineReducer from './reducers/AudioEngine'

const INITIAL_STATE = {
	
	waveforms: undefined,
	audioEngine: undefined,
}

const rootReducer = function(state=INITIAL_STATE, action) {

	return { 
		waveforms: waveformsReducer(state.waveforms, action),
		audioEngine: audioEngineReducer(state.audioEngine, action),
	}
}


const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
export { store };
