import { createStore, combineReducers } from "redux";
import {
	updateObject,
	updateItemInArray,
	updateMultipleItemsInArray
} from "./helpers/ImmutableHelpers";

import mainBuffer from "./reducers/MainBuffer";


import transportControlsReducer from "./reducers/TransportControls";

import waveformsReducer from './reducers/WaveformsReducer'

const rootReducer = combineReducers({
	transportControls: transportControlsReducer,
	waveforms: waveformsReducer,
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
export { store };
