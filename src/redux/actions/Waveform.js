
export function newBuffer(waveformId, bufferPreset) {
    return {
        type: "waveform/NEW_BUFFER",
        waveformId,
        bufferPreset
    };
}


export function setMode(waveformId, mode) {
    return {
        type: "waveform/SET_MODE",
        waveformId,
        mode
    }
}



export function setVolume(waveformId, volume) {
    return {
        type: "waveform/SET_VOLUME",
        waveformId,
        volume
    }
}

export function setZoom(waveformId, zoom) {
    return {
        type: "waveform/SET_ZOOM",      
        waveformId,
        zoom
    };
}

export function setFocus(waveformId, focus) {
    return {
        type: 'waveform/SET_FOCUS',
        waveformId,
        focus,
    };
}

export function setOffset(waveformId, offset) {
    return {
        type: 'waveform/SET_OFFSET',
        waveformId,
        offset
    };
}



export function toggleMoreStats(waveformId) {
    return {
        type: 'waveform/TOGGLE_MORE_STATS',
        waveformId,
    };
}

