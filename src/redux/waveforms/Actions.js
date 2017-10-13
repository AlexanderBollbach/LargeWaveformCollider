
export const updateDSPRulesWaveType = (waveformId, waveType) => ({
    type: "waveforms/UPDATE_DSPRULES_WAVE_TYPE",
    waveformId,
    waveType
});

export function setMode(waveformId, mode) {
    return {
        type: "waveforms/SET_MODE",
        waveformId,
        mode
    };
}

export function setVolume(waveformId, volume) {
    return {
        type: "waveforms/SET_VOLUME",
        waveformId,
        volume
    };
}


export function setLength(waveformId, length) {
    return {
        type: "waveforms/SET_LENGTH",
        waveformId,
        length
    };
}



export function setSkipStride(waveformId, skipStride) {
    return {
        type: "waveforms/SET_SKIPSTRIDE",
        waveformId,
        skipStride
    };
}




export function setSkipPhase(waveformId, skipPhase) {
    return {
        type: "waveforms/SET_SKIPPHASE",
        waveformId,
        skipPhase
    };
}


