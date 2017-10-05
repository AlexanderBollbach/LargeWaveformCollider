export function newBuffer(samples) {
	return {
		type: 'NEW_BUFFER',
		samples
	};
}

export function newProcessedBuffer(samples) {

	return {
		type: 'NEW_BUFFER',
		samples
	};
}


export function setZoom(zoom) {
	return {
		type: 'SET_ZOOM',
		zoom
	};
}




export function setFocus(focus) {
	return {
		type: 'SET_FOCUS',
		focus
	};
}



export function setOffset(offset) {
	return {
		type: 'SET_OFFSET',
		offset
	};
}


export function playPause() {
	return {
		type: 'PLAY_PAUSE',
	}
	
}


export function newWaveform() {
	return {
		type: 'NEW_WAVEFORM',
	}
	
}


export function incrementWaveformStart(id) {
	return {
		type: 'INCREMENT_WAVEFORM_START',
		id
	}
	
}


