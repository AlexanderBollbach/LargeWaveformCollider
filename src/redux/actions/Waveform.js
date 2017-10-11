
export function newBuffer(id, bufferPresetID, useSelected) {
    console.log('newBuffer')
    return {
        type: "waveform/NEW_BUFFER",
        id,
        bufferPresetID,
        useSelected
    };
}


export function setMode(id, mode) {
    return {
        type: "waveform/SET_MODE",
        id,
        mode
    }
}

export function playPause(useSelected) {
    return {
        type: "waveform/PLAY_PAUSE",
        useSelected: useSelected
    }
}

export function setVolume(id, volume) {
    return {
        type: "waveform/SET_VOLUME",
        id,
        volume
    }
}

export function setZoom(id, zoom) {
    return {
        type: "waveform/SET_ZOOM",      
        id,
        zoom
    };
}

export function setFocus(id, focus) {
    return {
        type: 'waveform/SET_FOCUS',
        id,
        focus,
    };
}

export function setOffset(id, offset) {
    return {
        type: 'waveform/SET_OFFSET',
        id,
        offset
    };
}



export function toggleMoreStats(id) {
    return {
        type: 'waveform/TOGGLE_MORE_STATS',
        id,
    };
}

