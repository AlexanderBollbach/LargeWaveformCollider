import React from 'react'
import Mode1 from './Mode1'
import Mode2 from './Mode2'
import Mode3 from './Mode3'

const modeLookup = {
	"a": <Mode1 />,
	"b": <Mode2 />,
	"c": <Mode3 />,
}

const Modes = ({modeName}) => modeLookup[modeName]

export default Modes