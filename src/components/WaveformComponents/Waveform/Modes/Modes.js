import React from 'react'
import Mode1 from './Mode1'
import Mode2 from './Mode2'
import Mode3 from './Mode3'


const modeWithID = (waveformId, modeId) => {

	const modeLookup = {
		"a": <Mode1 waveformId={waveformId} />,
		"b": <Mode2 waveformId={waveformId} />,
		"c": <Mode3 waveformId={waveformId} />,
	}
	return modeLookup[modeId]
}


const Modes = ({waveformId, modeId}) => modeWithID(waveformId, modeId)

export default Modes