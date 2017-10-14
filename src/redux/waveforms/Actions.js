
export const updateWaveType = (waveformId, waveType) => ({
    type: "waveforms/UPDATE_WAVE_TYPE",
    waveformId,
    waveType
});

export function updateMode(waveformId, mode) {
    return {
        type: "waveforms/UPDATE_MODE",
        waveformId,
        mode
    };
}

export function updateVolume(waveformId, volume) {
    return {
        type: "waveforms/UPDATE_VOLUME",
        waveformId,
        volume
    };
}


export function updateLength(waveformId, length) {
    return {
        type: "waveforms/UPDATE_LENGTH",
        waveformId,
        length
    };
}



export function updateSkipStride(waveformId, skipStride) {
    return {
        type: "waveforms/UPDATE_SKIPSTRIDE",
        waveformId,
        skipStride
    };
}




export function updateSkipPhase(waveformId, skipPhase) {
    return {
        type: "waveforms/UPDATE_SKIPPHASE",
        waveformId,
        skipPhase
    };
}


export function updateOffset(waveformId, offset) {
    return {
        type: "waveforms/UPDATE_OFFSET",
        waveformId,
        offset
    };
}


