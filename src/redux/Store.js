import { createStore, combineReducers } from "redux";
import {
	updateObject,
	updateItemInArray,
	updateMultipleItemsInArray
} from "./helpers/ImmutableHelpers";

import initialState from './InitialState'
console.log(initialState)


import waveformsReducer from './waveforms/Reducer'
import audioEngineReducer from './audioEngine/Reducer'

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
