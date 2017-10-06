export function newBuffer(samples) {
	return {
		type: 'NEW_BUFFER',
		samples
	};
}




export function playPause() {
	return {
		type: 'PLAY_PAUSE',
	}
	
}


