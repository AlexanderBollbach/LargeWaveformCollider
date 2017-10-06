import {store} from 'reduxAlias/Store'
import {
	processedSamples,
	
} from "reduxAlias/reducers/WaveformReducer";

export default class AudioEngine {



	constructor() {

		this.outputConnected = false

		var context = new AudioContext();

		// Destination
		this.destination = context.destination;

		this.scriptNode = context.createScriptProcessor(2048, 1, 1);


		let sub = store.subscribe(() => {
			store.getState().transportControls.isPlaying ? this.play() : this.pause()

		})


		var sampleIndexPhase = 1

		this.scriptNode.onaudioprocess = function(audioProcessingEvent) {

			const data = store.getState().waveformProcessor

			const samples = processedSamples(data)
			

			var outputBuffer = audioProcessingEvent.outputBuffer;

			// Loop through the output channels (in this case there is only one)
			for (
				var channel = 0;
				channel < outputBuffer.numberOfChannels;
				channel++
			) {

				var outputData = outputBuffer.getChannelData(channel);


				for (var sample = 0; sample < outputBuffer.length; sample++) {

					
					outputData[sample] = samples[sampleIndexPhase] * 0.2;



					if (sampleIndexPhase > samples.length) {
						sampleIndexPhase = 0

					}

					sampleIndexPhase++


					



				}
			}
		};
	}

	play() {
		if (!this.outputConnected)  {
			this.scriptNode.connect(this.destination);
			this.outputConnected = true	
		}
	}
	pause() {
		if (this.outputConnected) {
			this.scriptNode.disconnect(this.destination)
			this.outputConnected = false
		}
	}
}
