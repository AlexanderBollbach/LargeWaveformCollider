export const INITIAL_STATE = {
    id: 0,
    zoom: 1,
    offset: 0,
    selectedSample: 0,
    focus: 0,
    inputSamples: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]
};

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

export default function waveformProcessorReducer(state = INITIAL_STATE, action) {
    switch (action.type.replace("waveform/","")) {
        case "SET_FOCUS":
            const selectSampleOffsetOriginal =
                state.focus * samplesOnScreen(state);
            const selectSampleOffsetNew = action.focus * samplesOnScreen(state);
            const delta =
                Math.floor(selectSampleOffsetNew) -
                Math.floor(selectSampleOffsetOriginal);

            const newSelectedSample =
                state.selectedSample + delta
            return {
                ...state,
                selectedSample: newSelectedSample,
                focus: action.focus
            };
        case "SET_ZOOM":
            var newZoom = state.zoom + action.zoom;
            if (newZoom < 1) {
                newZoom = 1;
            }
            return { ...state, zoom: newZoom };
        case "SET_OFFSET":
            const newOffset = state.offset + (-action.offset * samplesOnScreen(state));
            return { ...state, offset: newOffset }; //newOffset };
        case "NEW_BUFFER":
            return {
                ...initialState,
                inputSamples: action.samples
            };
    }
    return state;
}

export const samplesOnScreen = state => {
    const samplesOnScreen = state.inputSamples.length / state.zoom;
    return Math.floor(samplesOnScreen);
};
export const offsetInSamples = state => {
    return state.offset;
};
export const selectedSampleOffset = state => {
    const n_samplesOnScreen = samplesOnScreen(state);
    const focus = state.focus;
    const selectedSampleOffset = focus * n_samplesOnScreen;
    return Math.floor(selectedSampleOffset);
};
export const startingSample = state => {
    const _selectedSampleOffset = selectedSampleOffset(state);
    const _offsetInSamples = offsetInSamples(state);

    const startingSample =
        state.selectedSample - _selectedSampleOffset - _offsetInSamples;
    return Math.floor(startingSample);
};

export const endingSample = state =>
    startingSample(state) + samplesOnScreen(state);

export const processedSamples = state => {
    const start = startingSample(state);
    const end = endingSample(state);

    const sampleDistance = end - start;
    var newSamples = [];
    for (var i = start; i < end; i++) {
        const trueIndex = i;
        const index = Math.floor(trueIndex);
        if (index < 0 || index > state.inputSamples.length - 1) {
            newSamples.push(0);
        } else {
            const amp = state.inputSamples[index];
            newSamples.push(amp);
        }
    }
    return newSamples;
};
