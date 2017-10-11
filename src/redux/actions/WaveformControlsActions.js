export function selectWaveform(waveformId) {
	return {
		type: "waveformControls/SELECT_WAVEFORM",
		waveformId
	}
}
